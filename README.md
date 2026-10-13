# Safehearts website

Open `index.html` in a browser, or serve this directory with:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000.

The four pages are `index.html`, `about.html`, `offer.html`, and `contact.html`. They use plain HTML and CSS, with the original Figma images and SVG icons in `assets/`. Shared styles are in `styles.css`; interior page layouts are in `pages.css`. Fraunces and DM Sans load from Google Fonts; an internet connection is required for those fonts.

Navigation links connect all four pages. School programme links select the relevant interest on the Contact form, and tour links select School tour. The form uses browser validation and `contact.js` to open a populated email draft to `hello@safehearts.sch`. The visitor must send the draft in their email app; no backend submission service is configured. The social labels are display-only because the design does not supply profile URLs. The phone number is displayed as supplied by Figma; a numeric dialling number was not supplied.

Reference: https://www.figma.com/design/JwaohZH46Dg7hrHqmFqgl8/Semester-Tech?node-id=277-1577

Interior page references: About `277:2049`, What we offer `278:2335`, Contact `278:2716` in the same Figma file.

Assets use descriptive filenames and are organized into:

- `assets/images/` — the three original school photographs, reused across the pages.
- `assets/icons/` — the original Figma SVG icons, including distinct colour and size variants.
