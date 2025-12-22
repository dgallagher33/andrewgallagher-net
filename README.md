# Welcome to Astro + Tailwind CSS + TypeScript

This is a modern website built with:
- **Astro** - Fast, modern static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Getting Started

### Prerequisites
- Node.js 18+ or higher

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Building

Build for production:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable Astro components
├── layouts/         # Layout components
├── pages/           # Page routes (file-based routing)
└── styles/          # Global styles and CSS

public/              # Static assets
```

## TypeScript Configuration

This project uses TypeScript with path aliases:
- `@/*` maps to `src/*`

Check `tsconfig.json` for full configuration.

## Tailwind CSS

Tailwind CSS is already configured and integrated. You can use all Tailwind utility classes in your components.

Global styles are in `src/styles/global.css`.

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
