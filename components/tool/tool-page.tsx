import { getTool } from "@/lib/tools-registry";
import { Badge } from "@/components/ui/badge";

/**
 * Standard chrome for every tool page: icon, name, subtitle, category.
 * Reads everything from the registry so tool pages stay minimal.
 */
export function ToolPage({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const tool = getTool(slug);
  if (!tool) throw new Error(`Tool not in registry: ${slug}`);
  const Icon = tool.icon;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <header className="mb-6 flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
          <Icon className="h-5 w-5 text-accent" aria-hidden />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-semibold tracking-tight">{tool.name}</h1>
            <Badge>{tool.category}</Badge>
          </div>
          <p className="mt-0.5 text-sm text-muted-foreground">{tool.description}</p>
        </div>
      </header>
      {children}
    </div>
  );
}
