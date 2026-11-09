// Add verified publications here. Keep DOI/URL empty if you do not have one.
const publications = [
  // Example structure (replace with a real publication):
  // {
  //   title: "Your article title",
  //   authors: "Author A, Author B, M. Pakdaman",
  //   journal: "Journal Name",
  //   year: 2025,
  //   doi: "https://doi.org/10.xxxx/xxxxx"
  // }
];

const publicationList = document.getElementById("publicationList");
const publicationSearch = document.getElementById("publicationSearch");

function renderPublications(query = "") {
  if (!publicationList) return;
  const q = query.trim().toLowerCase();
  const matches = publications.filter(item =>
    [item.title, item.authors, item.journal, item.year].join(" ").toLowerCase().includes(q)
  );

  if (!matches.length) {
    publicationList.innerHTML = `<div class="empty-state">${publications.length ? "No publications match your search." : 'Your publication list will appear here after you add entries to <code>script.js</code>.'}</div>`;
    return;
  }

  publicationList.innerHTML = matches
    .sort((a, b) => Number(b.year || 0) - Number(a.year || 0))
    .map(item => `
      <article class="publication-item">
        <h3>${escapeHTML(item.title || "Untitled publication")}</h3>
        <p>${escapeHTML(item.authors || "")}${item.authors && item.journal ? " · " : ""}${escapeHTML(item.journal || "")}${item.year ? " · " + escapeHTML(String(item.year)) : ""}</p>
        ${item.doi ? `<a href="${safeURL(item.doi)}" target="_blank" rel="noopener">View article / DOI ↗</a>` : ""}
      </article>
    `).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function safeURL(value) {
  try {
    const url = new URL(value, window.location.href);
    return ["https:", "http:"].includes(url.protocol) ? escapeHTML(url.href) : "#";
  } catch {
    return "#";
  }
}

publicationSearch?.addEventListener("input", event => renderPublications(event.target.value));
renderPublications();

const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
const storedTheme = localStorage.getItem("mp-theme");
if (storedTheme === "dark") document.body.classList.add("dark");
function updateThemeLabel() {
  if (themeLabel) themeLabel.textContent = document.body.classList.contains("dark") ? "Light appearance" : "Dark appearance";
}
updateThemeLabel();
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("mp-theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateThemeLabel();
});

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
menuToggle?.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    sidebar?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

// Replace this placeholder with your Google Scholar profile URL.
document.getElementById("allPublicationsLink")?.addEventListener("click", event => {
  const href = event.currentTarget.getAttribute("href");
  if (href === "#") {
    event.preventDefault();
    alert("Edit the All publications link in index.html and add your Google Scholar or institutional publications URL.");
  }
});
