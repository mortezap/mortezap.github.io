# Morteza Pakdaman — Personal Academic Website

A responsive academic portfolio built with plain HTML, CSS and JavaScript. No Hugo, WordPress, React or build step is required.

## Files
- `index.html` — page content and sections
- `style.css` — layout, colors, responsive design and dark theme
- `script.js` — publication search, dark-mode toggle and mobile navigation
- `assets/` — place your CV PDF and optional profile image here

## Publish with GitHub Pages
1. Create a **public** repository named exactly `mortezap.github.io` in your GitHub account.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then Save.
6. Wait for GitHub Pages to deploy. Your site will be at `https://mortezap.github.io/`.

If you already have a repository with this exact name, back up its contents before replacing files.

## Personalize before publishing
Search in `index.html` and replace:
- `YOUR_EMAIL@example.com` with your public professional email.
- The Google Scholar and ORCID `href="#"` values with your real profile links.
- The `All publications` link with your real publication list URL.
- The CV link points to `assets/Morteza_Pakdaman_CV.pdf`; upload your PDF with this exact name or edit the path.
- Replace the placeholder initials avatar with your own image if you wish. Create `assets/profile.jpg`, uncomment the `<img>` line and remove the initials `<div>`.

In `script.js`, add only verified publication records to the `publications` array. Example:
```js
{
  title: "Exact article title",
  authors: "Author list",
  journal: "Journal title",
  year: 2025,
  doi: "https://doi.org/..."
}
```

## Notes
- The site uses Google Fonts from fonts.googleapis.com. If you prefer no external font request, remove the two Google Fonts `<link>` lines from `index.html`; the CSS will fall back to sans-serif fonts.
- The text in the page is an editable first draft. Check titles, institutional wording, roles and links before making the site public.
- Do not upload private, confidential or unpublished material.
