"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Segment-level error boundary. A crash inside any single tool lands here;
 * the sidebar, topbar, and every other tool keep working.
 */
export default function ToolError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-24 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-danger/10">
        <AlertTriangle className="h-6 w-6 text-danger" aria-hidden />
      </span>
      <div>
        <h1 className="text-lg font-semibold">This tool hit an error</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The rest of OmniTools is unaffected. You can retry this tool or head back
          to the dashboard.
        </p>
        {error?.message && (
          <p className="mt-3 rounded-md bg-muted px-3 py-2 font-mono text-xs text-muted-foreground">
            {error.message}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <Button onClick={reset}>
          <RotateCcw className="h-4 w-4" />
          Try again
        </Button>
        <Link
          href="/"
          className="inline-flex h-9 items-center justify-center rounded-md border border-border px-4 text-sm font-medium hover:bg-muted"
        >
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}
