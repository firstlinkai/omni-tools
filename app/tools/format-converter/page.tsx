import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { FormatConverterClient } from "./format-converter-client";

export const metadata: Metadata = {
  title: "Format Converter",
  description: "Convert between JSON, YAML, CSV, and Markdown tables.",
};

export default function Page() {
  return (
    <ToolPage slug="format-converter">
      <FormatConverterClient />
    </ToolPage>
  );
}
