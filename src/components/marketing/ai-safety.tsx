import { Container, Section } from "@/components/ui/layout";
import { Check, Pencil, X } from "lucide-react";

export function AiSafety() {
  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-2xl bg-surface-dark text-on-dark">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
            <div>
              <span className="eyebrow text-on-dark-soft">
                Human-in-the-loop
              </span>
              <h2 className="display-md mt-3 text-on-dark">
                The AI drafts. A person decides what gets billed.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-on-dark-soft">
                A language model can hear &ldquo;topped off two pounds of
                R-410A&rdquo; and turn it into a line item — but a hallucination
                must never land on a customer&rsquo;s invoice. So parts detected
                from audio are <strong className="text-on-dark">suggestions</strong>,
                not charges. They carry an estimated price, they don&rsquo;t
                affect the total, and invoicing is blocked until every one has
                been reviewed.
              </p>
              <ul className="mt-6 space-y-3 text-[14px] text-on-dark-soft">
                {[
                  ["Approve", "keep the line, adjust quantity or price"],
                  ["Edit", "rewrite the part before it counts"],
                  ["Reject", "drop the suggestion entirely"],
                ].map(([label, desc], i) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface-dark-soft">
                      {i === 0 ? (
                        <Check className="h-3.5 w-3.5 text-success" />
                      ) : i === 1 ? (
                        <Pencil className="h-3.5 w-3.5 text-on-dark" />
                      ) : (
                        <X className="h-3.5 w-3.5 text-danger" />
                      )}
                    </span>
                    <span>
                      <strong className="text-on-dark">{label}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-surface-dark-soft p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-on-dark-soft">{"// work log · job #4821"}</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-md border border-white/10 bg-black/20 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-on-dark">Hot-surface ignitor</span>
                    <span className="rounded bg-[#f5a623]/15 px-1.5 py-0.5 text-[11px] text-[#f5a623]">
                      SUGGESTED
                    </span>
                  </div>
                  <p className="mt-1 text-on-dark-soft">
                    qty 1 · est. $38.00 · not in total
                  </p>
                </div>
                <div className="rounded-md border border-white/10 bg-black/20 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-on-dark">R-410A refrigerant</span>
                    <span className="rounded bg-success/15 px-1.5 py-0.5 text-[11px] text-success">
                      CONFIRMED
                    </span>
                  </div>
                  <p className="mt-1 text-on-dark-soft">qty 2 lb · $54.00 · in total</p>
                </div>
              </div>
              <p className="mt-4 border-t border-white/10 pt-3 text-on-dark-soft">
                subtotal counts <span className="text-on-dark">confirmed only</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
