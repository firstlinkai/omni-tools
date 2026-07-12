import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { BlurImageClient } from "./blur-image-client";

export const metadata: Metadata = {
  title: "Image Blur Tool",
  description:
    "Drag boxes over sensitive regions to blur, pixelate, or black them out, then export a redacted PNG. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="blur-image">
      <BlurImageClient />
    </ToolPage>
  );
}
