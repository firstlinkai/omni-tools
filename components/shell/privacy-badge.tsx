import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function PrivacyBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-muted/40 px-2.5 py-1 text-[11px] font-medium text-foreground",
        className,
      )}
      title="Everything runs locally in your browser. Nothing is uploaded."
    >
      <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden />
      <span className="hidden sm:inline">Client-side: your data never leaves your device</span>
      <span className="sm:hidden">100% client-side</span>
    </span>
  );
}
