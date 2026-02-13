import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Lunagraph Starter</h1>
        <p className="text-muted-foreground max-w-md">
          Visual React component editor. Design and edit components on a canvas, then export to code.
        </p>
      </div>

      <Link
        href="/editor"
        className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Open Editor
      </Link>

      <div className="text-sm text-muted-foreground space-y-4 text-center max-w-md">
        <div className="space-y-2">
          <p className="font-medium text-foreground">Commands</p>
          <div className="grid gap-2 text-left">
            <div className="flex items-start gap-3">
              <code className="bg-muted px-2 py-1 rounded text-xs shrink-0">pnpm dev:all</code>
              <span className="text-xs">Start editor (Next.js + Lunagraph server)</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-muted px-2 py-1 rounded text-xs shrink-0">pnpm scan</code>
              <span className="text-xs">Re-scan components after adding or modifying</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-muted px-2 py-1 rounded text-xs shrink-0">pnpm generate-snapshots</code>
              <span className="text-xs">Generate snapshots for production read-only mode</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-muted px-2 py-1 rounded text-xs shrink-0">pnpm build</code>
              <span className="text-xs">Build for production (auto-runs scan + snapshots)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
