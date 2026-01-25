# Lunagraph Starter

Visual React component editor. Design and edit components on a canvas with drag-and-drop, then export to code.

## Quick Start

### 1. Set up your access token

Add your Lunagraph token to your shell:

```bash
echo 'export LUNAGRAPH_TOKEN=your_token_here' >> ~/.zshrc
source ~/.zshrc
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Scan components

```bash
pnpm scan
```

### 4. Start the editor

```bash
pnpm dev:all
```

This runs both the Next.js dev server and the Lunagraph dev server.

Open [http://localhost:3000/editor](http://localhost:3000/editor) to start editing.

## Adding Components

Use shadcn to add UI components:

```bash
pnpm dlx shadcn@latest add button card input
```

After adding components, run `pnpm scan` to make them available in the editor.

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start Next.js dev server |
| `pnpm dev:all` | Start both Next.js and Lunagraph servers |
| `pnpm scan` | Scan components for the editor |
| `pnpm lunagraph:server` | Start Lunagraph dev server only |
| `pnpm build` | Build for production |

## Component Guidelines

See `.lunagraph/INSTRUCTIONS.md` for component authoring guidelines.

Key points:
- One component per file
- Use named exports (`export function Button`)
- Type all props with TypeScript
- Use string unions for variants (creates dropdowns in editor)

## Learn More

- [Lunagraph Documentation](https://lunagraph.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Next.js](https://nextjs.org/docs)
