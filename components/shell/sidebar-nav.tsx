"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOOL_CATEGORIES, getToolsByCategory } from "@/lib/tools-registry";
import { cn } from "@/lib/utils";

/**
 * Category-grouped tool navigation. Rendered inside both the desktop
 * sidebar and the mobile drawer.
 */
export function SidebarNav({
  collapsed = false,
  onNavigate,
}: {
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-5 px-2 pb-6" aria-label="Tools">
      {TOOL_CATEGORIES.map((category) => (
        <div key={category}>
          {!collapsed && (
            <p className="px-2 pb-1.5 text-[11px] font-semibold text-muted-foreground">
              {category}
            </p>
          )}
          <ul className="flex flex-col gap-0.5">
            {getToolsByCategory(category).map((tool) => {
              const href = `/tools/${tool.slug}`;
              const active = pathname === href;
              const Icon = tool.icon;
              return (
                <li key={tool.slug}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    title={collapsed ? tool.name : undefined}
                    className={cn(
                      "flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
                      collapsed && "justify-center px-0 py-2",
                      active
                        ? "bg-accent-muted/50 font-medium text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <Icon
                      className={cn("h-4 w-4 shrink-0", active && "text-accent")}
                      aria-hidden
                    />
                    {!collapsed && <span className="truncate">{tool.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
