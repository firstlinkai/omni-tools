import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { SortListClient } from "./sort-list-client";

export const metadata: Metadata = {
  title: "Sort a List",
  description: "Sort multi-line text alphabetically, numerically, or reversed.",
};

export default function Page() {
  return (
    <ToolPage slug="sort-list">
      <SortListClient />
    </ToolPage>
  );
}
