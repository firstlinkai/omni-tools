import Link from "next/link";
import { ShieldCheck, Zap, HardDriveDownload } from "lucide-react";
import { TOOL_CATEGORIES, getToolsByCategory } from "@/lib/tools-registry";

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "Every tool runs in your browser. Files and text are never uploaded.",
  },
  {
    icon: Zap,
    title: "Instant",
    body: "No sign-up, no queue, no server round-trips. Open a tool and work.",
  },
  {
    icon: HardDriveDownload,
    title: "Yours to keep",
    body: "Results export straight to your disk: PNG, PDF, SVG, CSS, video.",
  },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      {/* Intro */}
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Seventeen tools. Zero uploads.
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Format data, generate assets, edit media, and run your paperwork,
          all inside this tab. Nothing you paste or drop here ever leaves your device.
        </p>
      </div>

      {/* Principles */}
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {PRINCIPLES.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <div>
              <p className="text-sm font-medium">{title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tool grid, grouped by category */}
      {TOOL_CATEGORIES.map((category) => (
        <section key={category} className="mt-12">
          <h2 className="text-sm font-semibold text-muted-foreground">{category}</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {getToolsByCategory(category).map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/50 hover:bg-muted/40"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted transition-colors group-hover:bg-accent-muted/60">
                    <Icon className="h-4.5 w-4.5 text-accent" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">{tool.name}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                      {tool.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
        OmniTools is open, free, and fully client-side. Press Ctrl K to jump to any tool.
      </p>
    </div>
  );
}
