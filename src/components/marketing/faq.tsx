"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/layout";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="display-lg mt-3 text-ink">
              Questions, answered plainly
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              Still unsure whether it fits your shop?{" "}
              <a href="/contact" className="text-link hover:underline">
                Talk to us
              </a>
              .
            </p>
          </div>

          <div className="divide-y divide-hairline border-t border-hairline">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] font-semibold tracking-[-0.01em] text-ink">
                      {item.q}
                    </span>
                    <span className="mt-0.5 shrink-0 text-muted">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-200",
                      isOpen
                        ? "grid-rows-[1fr] pb-5 opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl text-[14.5px] leading-relaxed text-body">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
