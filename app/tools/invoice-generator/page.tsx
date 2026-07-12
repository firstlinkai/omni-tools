import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { InvoiceGeneratorClient } from "./invoice-generator-client";

export const metadata: Metadata = {
  title: "Invoice Generator",
  description: "Line-item billing with tax math, exported straight to PDF.",
};

export default function Page() {
  return (
    <ToolPage slug="invoice-generator">
      <InvoiceGeneratorClient />
    </ToolPage>
  );
}
