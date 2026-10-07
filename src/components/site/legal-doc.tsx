import type { ReactNode } from "react";
import { Container } from "@/components/ui/layout";

export function LegalDoc({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-hairline bg-canvas-soft">
        <Container className="py-14 sm:py-16">
          <h1 className="display-lg text-ink">{title}</h1>
          <p className="mt-3 text-sm text-muted">Last updated {updated}</p>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <div
          className="
            mx-auto max-w-[720px]
            [&_h2]:mt-10 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:tracking-[-0.01em] [&_h2]:text-ink
            [&_h3]:mt-7 [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-ink
            [&_p]:mt-3.5 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-body
            [&_ul]:mt-3.5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:text-[15px] [&_ul]:leading-relaxed [&_ul]:text-body
            [&_a]:text-link [&_a]:underline
            [&_strong]:text-ink
          "
        >
          {/* <div className="rounded-lg border border-hairline-strong bg-surface-strong/60 p-4 text-[13px] leading-relaxed text-body">
            This document is a starting template for TradeHound and is not legal
            advice. Have counsel review and adapt it before you rely on it in
            production.
          </div> */}
          {children}
        </div>
      </Container>
    </>
  );
}
