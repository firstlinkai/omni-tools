import {
  ArrowDownAZ,
  ArrowLeftRight,
  BookOpenCheck,
  Braces,
  Clapperboard,
  EyeOff,
  FileStack,
  Gauge,
  ImageDown,
  LayoutTemplate,
  Layers,
  Receipt,
  Regex,
  Scissors,
  Sigma,
  Video,
  Waves,
  type LucideIcon,
} from "lucide-react";

export const TOOL_CATEGORIES = [
  "Developer & Data",
  "Design & Frontend",
  "Media & Files",
  "Productivity & Business",
] as const;

export type ToolCategory = (typeof TOOL_CATEGORIES)[number];

export interface ToolDef {
  slug: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: LucideIcon;
  keywords: string[];
}

/**
 * Single source of truth for every tool in the suite.
 * The sidebar, dashboard, command search, and tool headers all read from here.
 * Adding a tool = one entry here + one directory under app/tools/<slug>/.
 */
export const TOOLS: ToolDef[] = [
  // ── Developer & Data ────────────────────────────────────────────────
  {
    slug: "prettify-json",
    name: "Prettify JSON",
    description: "Validate, format, and color-code raw or minified JSON.",
    category: "Developer & Data",
    icon: Braces,
    keywords: ["json", "format", "beautify", "validate", "minify"],
  },
  {
    slug: "format-converter",
    name: "Format Converter",
    description: "Convert between JSON, YAML, CSV, and Markdown tables.",
    category: "Developer & Data",
    icon: ArrowLeftRight,
    keywords: ["json", "yaml", "csv", "markdown", "convert", "transform"],
  },
  {
    slug: "regex-tester",
    name: "RegEx Tester",
    description: "Test expressions with live match highlighting and a syntax cheat sheet.",
    category: "Developer & Data",
    icon: Regex,
    keywords: ["regex", "regexp", "pattern", "match", "cheat sheet"],
  },
  {
    slug: "sort-list",
    name: "Sort a List",
    description: "Sort multi-line text alphabetically, numerically, or reversed.",
    category: "Developer & Data",
    icon: ArrowDownAZ,
    keywords: ["sort", "list", "alphabetical", "numeric", "dedupe", "lines"],
  },
  {
    slug: "split-text",
    name: "Split a Text",
    description: "Chop text into blocks by character count, word count, or delimiter.",
    category: "Developer & Data",
    icon: Scissors,
    keywords: ["split", "text", "chunk", "delimiter", "characters", "words"],
  },

  // ── Design & Frontend ───────────────────────────────────────────────
  {
    slug: "svg-wave-generator",
    name: "SVG Wave Generator",
    description: "Generate organic waves and blobs with sliders, export raw SVG.",
    category: "Design & Frontend",
    icon: Waves,
    keywords: ["svg", "wave", "blob", "shape", "generator", "hero", "divider"],
  },
  {
    slug: "social-preview",
    name: "Social Media Preview",
    description: "Preview link cards for Google, X, LinkedIn, and Facebook.",
    category: "Design & Frontend",
    icon: LayoutTemplate,
    keywords: ["og", "open graph", "twitter", "card", "seo", "meta", "serp"],
  },
  {
    slug: "css-keyframe-builder",
    name: "CSS Keyframe Builder",
    description: "Build animations on a visual timeline, export pure @keyframes CSS.",
    category: "Design & Frontend",
    icon: Clapperboard,
    keywords: ["css", "animation", "keyframes", "timeline", "transition"],
  },

  // ── Media & Files ───────────────────────────────────────────────────
  {
    slug: "blur-image",
    name: "Image Blur Tool",
    description: "Drag boxes over sensitive regions and export a redacted PNG.",
    category: "Media & Files",
    icon: EyeOff,
    keywords: ["blur", "redact", "censor", "privacy", "screenshot", "image"],
  },
  {
    slug: "compress-png",
    name: "Compress PNG",
    description: "Compress images and knock out backgrounds to transparency.",
    category: "Media & Files",
    icon: ImageDown,
    keywords: ["compress", "png", "optimize", "transparent", "background", "image"],
  },
  {
    slug: "split-pdf",
    name: "Split PDF",
    description: "Pick pages from a thumbnail grid and extract them to a new PDF.",
    category: "Media & Files",
    icon: FileStack,
    keywords: ["pdf", "split", "extract", "pages", "merge"],
  },
  {
    slug: "gif-speed",
    name: "Change GIF Speed",
    description: "Speed up or slow down animated GIFs, from 0.25x to 4x.",
    category: "Media & Files",
    icon: Gauge,
    keywords: ["gif", "speed", "slow", "fast", "animation", "frames"],
  },
  {
    slug: "trim-video",
    name: "Trim Video",
    description: "Cut video clips locally with in-browser FFmpeg. No uploads.",
    category: "Media & Files",
    icon: Video,
    keywords: ["video", "trim", "cut", "clip", "ffmpeg", "mp4"],
  },

  // ── Productivity & Business ─────────────────────────────────────────
  {
    slug: "invoice-generator",
    name: "Invoice Generator",
    description: "Line-item billing with tax math, exported straight to PDF.",
    category: "Productivity & Business",
    icon: Receipt,
    keywords: ["invoice", "receipt", "billing", "tax", "pdf", "freelance"],
  },
  {
    slug: "number-sum",
    name: "Number Sum",
    description: "Extract every number from messy text: sum, average, median, min, max.",
    category: "Productivity & Business",
    icon: Sigma,
    keywords: ["sum", "average", "median", "numbers", "statistics", "count"],
  },
  {
    slug: "readability",
    name: "Readability Analyzer",
    description: "Flesch-Kincaid scoring with dense-paragraph and key-phrase highlighting.",
    category: "Productivity & Business",
    icon: BookOpenCheck,
    keywords: ["readability", "flesch", "kincaid", "writing", "skim", "analyze"],
  },
  {
    slug: "flashcards",
    name: "Flashcard Studio",
    description: "Build decks and study with flip cards. Saved in your browser.",
    category: "Productivity & Business",
    icon: Layers,
    keywords: ["flashcards", "study", "learn", "deck", "memorize", "cards"],
  },
];

export function getTool(slug: string): ToolDef | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolDef[] {
  return TOOLS.filter((t) => t.category === category);
}
