# Initiative for the Needy

A server-rendered website built with Next.js App Router, React, TypeScript, and Tailwind CSS. Application code lives under `src/`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate and deploy

```bash
npm run lint
npm run build
npm run start
```

## Source structure

- `src/app/` - App Router routes, layouts, metadata, and global styles.
- `src/components/` - shared and feature-specific UI.
- `src/data/` - site content.
- `src/hooks/`, `src/types/`, and `src/utils/` - shared hooks, types, and helpers.

The `[id]` routes read their dynamic segment from Next.js route params.
