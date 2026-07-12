import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { GifSpeedClient } from "./gif-speed-client";

export const metadata: Metadata = {
  title: "Change GIF Speed",
  description:
    "Speed up or slow down animated GIFs from 0.25x to 4x, decoded and re-encoded entirely in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="gif-speed">
      <GifSpeedClient />
    </ToolPage>
  );
}
