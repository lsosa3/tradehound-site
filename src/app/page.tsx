import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { TradeStrip } from "@/components/marketing/trade-strip";
import { Workflow } from "@/components/marketing/workflow";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { AiSafety } from "@/components/marketing/ai-safety";
import { Faq } from "@/components/marketing/faq";
import { CtaBand } from "@/components/marketing/cta-band";
import { PricingTiers } from "@/components/marketing/pricing-tiers";
import { Container, Section, Eyebrow } from "@/components/ui/layout";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TradeStrip />
      <Workflow />
      <FeatureGrid />
      <AiSafety />

      <Section id="pricing" className="bg-canvas-soft">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="display-lg mt-3 text-ink">
              Simple monthly price. Add seats as you grow.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-body">
              Every plan includes the core workflow. Pick by crew size and
              monthly AI job volume. No per-invoice fees from us — payment
              processing is billed by Stripe.
            </p>
          </div>
          <div className="mt-14">
            <PricingTiers />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Need something bigger?{" "}
            <Link href="/contact" className="text-link hover:underline">
              Talk to us about volume
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Faq />
      <CtaBand />
    </>
  );
}
