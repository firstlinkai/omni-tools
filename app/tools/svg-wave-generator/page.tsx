import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { WaveClient } from "./wave-client";

export const metadata: Metadata = {
  title: "SVG Wave Generator",
  description: "Generate organic SVG waves and blobs with sliders, export raw SVG.",
};

export default function Page() {
  return (
    <ToolPage slug="svg-wave-generator">
      <WaveClient />
    </ToolPage>
  );
}
