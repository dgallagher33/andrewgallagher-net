# Resume Site (Astro + Tailwind)

Static resume built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) that renders content from a single JSON file.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:4321 to view the site.

## Customizing content

Update the structured data in [`src/data/resume.json`](src/data/resume.json). The site automatically pulls from this file, and a JSON endpoint is exposed at `/resume.json` for downloading or integrating the data elsewhere.

## Building for production

```bash
npm run build
npm run preview
```

This produces a static site in `dist/` that you can host on any static file service.
