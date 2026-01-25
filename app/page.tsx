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

      <div className="text-sm text-muted-foreground space-y-1 text-center">
        <p>Run both servers to start:</p>
        <code className="bg-muted px-2 py-1 rounded text-xs">pnpm dev:all</code>
      </div>
    </div>
  );
}
