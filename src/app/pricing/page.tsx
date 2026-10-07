import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { PricingTiers } from "@/components/marketing/pricing-tiers";
import { Faq } from "@/components/marketing/faq";
import { CtaBand } from "@/components/marketing/cta-band";
import { Container, Section } from "@/components/ui/layout";
import { Check, Minus } from "lucide-react";
import { plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple monthly pricing for TradeHound. Every plan includes AI job reports, dispatch, invoicing, and automatic collections. Plans include a set number of seats, and Growth and Scale let you add more as your team grows.",
};

const matrix: { label: string; values: [boolean, boolean, boolean] | [string, string, string] }[] = [
  { label: "AI voice-to-report pipeline", values: [true, true, true] },
  { label: "Dispatch board & scheduling", values: [true, true, true] },
  { label: "Invoicing + Stripe payment links", values: [true, true, true] },
  { label: "Automatic SMS payment reminders", values: [true, true, true] },
  { label: "Offline-first field app (PWA)", values: [true, true, true] },
  { label: "Real-time sales tax calculation", values: [true, true, true] },
  { label: "Preventive maintenance plans", values: [false, true, true] },
  { label: "Equipment / asset history", values: [false, true, true] },
  { label: "Role-based access control", values: [false, true, true] },
  { label: "Priority AI processing", values: [false, false, true] },
  { label: "A2P 10DLC onboarding assistance", values: [false, false, true] },
  { label: "Included seats", values: ["2", "8", "20"] },
  { label: "Additional seats", values: ["—", "$25/mo each", "$20/mo each"] },
  { label: "AI jobs per month", values: ["50", "300", "1,500"] },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple monthly price. No per-invoice fees."
        intro="Every plan has every core feature. Pick the plan that fits your crew and your monthly AI job volume, then add seats as you hire. 14-day free trial, no credit card."
      />

      <Section>
        <Container>
          <PricingTiers />
          <p className="mt-6 text-center text-sm text-muted">
            Prices in USD. Homeowner card processing is billed separately by
            Stripe at their standard rates.
          </p>
        </Container>
      </Section>

      <Section className="bg-canvas-soft">
        <Container>
          <h2 className="display-md text-ink">Compare plans</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-hairline-strong">
                  <th className="py-4 pr-4 text-sm font-semibold text-ink">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className="px-4 py-4 text-center text-sm font-semibold text-ink"
                    >
                      {p.name}
                      <span className="block text-[12px] font-normal text-muted">
                        ${p.price}/mo
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row) => (
                  <tr key={row.label} className="border-b border-hairline">
                    <td className="py-3.5 pr-4 text-[14px] text-body">
                      {row.label}
                    </td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-4 py-3.5 text-center">
                        {typeof v === "boolean" ? (
                          v ? (
                            <Check className="mx-auto h-4 w-4 text-success" />
                          ) : (
                            <Minus className="mx-auto h-4 w-4 text-muted-soft" />
                          )
                        ) : (
                          <span className="text-[14px] font-medium text-ink">
                            {v}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Faq />
      <CtaBand heading="Try it on a real job" />
    </>
  );
}
