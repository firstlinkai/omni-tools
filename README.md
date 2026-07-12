# OmniTools

A privacy-first, all-in-one web utility suite. 17 tools for developers, designers, and everyday work, running **100% client-side**: nothing you paste, drop, or upload ever leaves your browser.

## Why

- **Private by design.** Text, images, PDFs, and videos are processed locally with browser APIs (Canvas, WebAssembly, File API). Zero server storage, zero tracking of content.
- **Free to run.** No backend means the whole app deploys as a static-ish Next.js site on Vercel or Netlify free tiers.
- **One tab instead of seventeen bookmarks.** A unified shell with category navigation, Ctrl+K search, and dark/light mode.

## The tools

| Category | Tools |
| --- | --- |
| Developer & Data | Prettify JSON, Format Converter (JSON/YAML/CSV/Markdown), RegEx Tester + cheat sheet, Sort a List, Split a Text |
| Design & Frontend | SVG Wave Generator, Social Media Preview, CSS Keyframe Builder |
| Media & Files | Image Blur Tool, Compress PNG, Split PDF, Change GIF Speed, Trim Video (ffmpeg.wasm) |
| Productivity & Business | Invoice Generator (PDF export), Number Sum, Readability Analyzer, Flashcard Studio |

## Stack

- Next.js 15 (App Router) + TypeScript, React 19
- Tailwind CSS v4 with semantic design tokens, dark/light via `next-themes`
- Lucide icons, Geist + Geist Mono
- Client-side engines: `pdf-lib`, `pdfjs-dist`, `@ffmpeg/ffmpeg` (WASM, lazy-loaded), `browser-image-compression`, `gifuct-js` + `gifenc`, `js-yaml`, `papaparse`

## Architecture

- `lib/tools-registry.ts` is the single source of truth: every tool's slug, name, description, category, icon, and search keywords. The sidebar, dashboard, command search, and tool headers all render from it.
- Each tool lives in its own isolated directory: `app/tools/<slug>/page.tsx` (server component with metadata) plus a `"use client"` implementation. Tools never import from each other.
- `app/tools/error.tsx` is a segment-level error boundary: a crash inside one tool never takes down the shell or the other tools.
- Heavy engines (ffmpeg, pdfjs) are dynamically imported inside the tool that needs them, so the rest of the app stays light. The only network request in the entire app is the one-time ffmpeg core download from a CDN in Trim Video.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

## Deploy

Push to GitHub and import into Vercel (zero config needed), or `vercel deploy`. No environment variables required.

## Adding a tool

1. Add an entry to `lib/tools-registry.ts`.
2. Create `app/tools/<slug>/page.tsx` following the existing pattern.

That's it: navigation, search, and the dashboard pick it up automatically.
