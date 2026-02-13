# Lunagraph Starter

Visual React component editor. Design and edit components on a canvas with drag-and-drop, then export to code.

## Prerequisites

You need three things installed. Open **Terminal** (on Mac: press `Cmd + Space`, type "Terminal", hit Enter).

### 1. Node.js

Check if you have it:

```bash
node -v
```

If you see a version number (e.g. `v20.11.0`), you're good.

If you see "command not found":
1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS** version
3. Open the downloaded file and click through the installer
4. Close and reopen Terminal, then try `node -v` again

### 2. pnpm

```bash
pnpm -v
```

If "command not found":

```bash
npm install -g pnpm
```

### 3. Git

```bash
git --version
```

On Mac, if Git is not installed, a popup will appear asking to **"Install Xcode Command Line Tools?"**. Click **Install** and wait (5-10 minutes).

---

## Quick Start

### 1. Set up your access token

You should have received a token from the Lunagraph team (starts with `ghp_`).

Run this in Terminal, replacing `your_token_here` with your actual token:

```bash
echo 'export LUNAGRAPH_TOKEN=your_token_here' >> ~/.zshrc
source ~/.zshrc
```

To verify it worked:

```bash
echo $LUNAGRAPH_TOKEN
```

It should print your token back. If it prints nothing, try closing and reopening Terminal, then check again.

> **What does this do?** It saves your token so your computer remembers it every time you open Terminal. The `~/.zshrc` file is a settings file for your terminal — you don't need to touch it again.

### 2. Create your project

Now that the token is set up, you can create a new project:

```bash
npx create-lunagraph-app my-project
cd my-project
```

This downloads the starter template and installs all dependencies. Takes 1-2 minutes.

> **Already have the project cloned?** Skip this step and just run `pnpm install` instead.

### 3. Scan components

```bash
pnpm scan
```

This scans all the React components so the editor knows about them.

### 4. Start the editor

```bash
pnpm dev:all
```

This runs both the Next.js dev server and the Lunagraph dev server. **Keep this Terminal window open** — closing it stops the editor.

Open [http://localhost:3000/editor](http://localhost:3000/editor) to start editing.

---

## Daily Use

Every time you want to use Lunagraph:

```bash
cd your-project-folder
pnpm dev:all
```

Then open [http://localhost:3000/editor](http://localhost:3000/editor).

To stop: press `Ctrl + C` in Terminal.

---

## Adding Components

Use shadcn to add UI components:

```bash
pnpm dlx shadcn@latest add button card input
```

After adding components, run `pnpm scan` to make them available in the editor, then restart with `pnpm dev:all`.

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev:all` | Start both Next.js and Lunagraph servers |
| `pnpm dev` | Start Next.js dev server only |
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

## Troubleshooting

| Problem | Fix |
|---------|-----|
| "command not found: pnpm" | Run `npm install -g pnpm` |
| "command not found: node" | Install Node.js from [nodejs.org](https://nodejs.org) |
| "command not found: git" | Run `xcode-select --install` on Mac |
| Auth error / 401 when installing | Token not set. Run `echo $LUNAGRAPH_TOKEN` — if empty, redo token step above |
| Port 3000 already in use | Another server is running. Close other Terminal windows, then try again |
| Editor is blank / components missing | Run `pnpm scan` then restart with `pnpm dev:all` |

## Learn More

- [Lunagraph Documentation](https://lunagraph.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Next.js](https://nextjs.org/docs)
