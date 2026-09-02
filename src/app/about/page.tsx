import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { Container, Section, Eyebrow } from "@/components/ui/layout";

export const metadata: Metadata = {
  title: "About",
  description:
    "TradeHound is field service management built for small and mid-size US trade businesses — the ones doing the work, not the ones with an IT department.",
};

const principles = [
  {
    title: "The technician shouldn't do paperwork",
    body: "Field techs are good at fixing things, not at writing reports in a truck. The job of the software is to capture what they already know how to say out loud and turn it into everything the office needs.",
  },
  {
    title: "AI assists; it doesn't bill",
    body: "We use language models where they're genuinely useful — transcription, drafting, summarizing. We keep them away from the one place a mistake is unacceptable: what a customer is charged. A person confirms every line.",
  },
  {
    title: "Get paid without chasing",
    body: "Small shops lose real money to invoices that never get followed up. Collections should be a system that runs on its own, not a task that falls to whoever has time.",
  },
  {
    title: "Compliance is table stakes",
    body: "Texting customers in the US means A2P 10DLC, consent records, and STOP handling. We build that in so a two-person business isn't exposed the way it would be rolling its own.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Software for the shops doing the work"
        intro="TradeHound is a field service management platform for HVAC, plumbing, electrical, and repair businesses in the United States — built around how a small crew actually operates."
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl space-y-5 text-[16px] leading-relaxed text-body">
            <p>
              Most field service software was built for enterprises and then sold
              down-market. The result is a class of tools that assume a
              dispatcher at a desk, a back office, and someone whose job is to
              keep the system fed. A four-person HVAC company doesn&rsquo;t have
              any of that.
            </p>
            <p>
              TradeHound starts from the opposite end. The technician records a
              voice memo. The AI writes the reports. The office reviews the parts
              and sends the invoice. Unpaid jobs follow up on their own. The
              software does the administrative work that used to happen at the
              kitchen table at 9pm.
            </p>
            <p>
              We&rsquo;re focused on the US market specifically — real sales tax
              by jurisdiction, Stripe payouts, and SMS that&rsquo;s compliant
              with US carrier rules — because &ldquo;works everywhere&rdquo;
              usually means &ldquo;handles nowhere&rsquo;s details.&rdquo;
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What we believe</Eyebrow>
            <h2 className="display-lg mt-3 text-ink">
              Four things we build around
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-hairline-strong bg-surface p-6"
              >
                <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-body">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        heading="Run a job through it"
        sub="The fastest way to understand TradeHound is to onboard your company and put one real service call through the system. It takes a few minutes."
      />
    </>
  );
}
