import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { SocialPreviewClient } from "./social-preview-client";

export const metadata: Metadata = {
  title: "Social Media Preview",
  description: "Preview link cards for Google, X, LinkedIn, and Facebook before you publish.",
};

export default function Page() {
  return (
    <ToolPage slug="social-preview">
      <SocialPreviewClient />
    </ToolPage>
  );
}
