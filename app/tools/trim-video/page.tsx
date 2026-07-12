import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { TrimVideoClient } from "./trim-video-client";

export const metadata: Metadata = {
  title: "Trim Video",
  description:
    "Cut video clips locally with in-browser FFmpeg. Your video never leaves this device.",
};

export default function Page() {
  return (
    <ToolPage slug="trim-video">
      <TrimVideoClient />
    </ToolPage>
  );
}
