import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { SplitPdfClient } from "./split-pdf-client";

export const metadata: Metadata = {
  title: "Split PDF",
  description:
    "Pick pages from a thumbnail grid and extract them to a new PDF. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="split-pdf">
      <SplitPdfClient />
    </ToolPage>
  );
}
