import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/marketing/contact-form";
import { Container, Section } from "@/components/ui/layout";
import { CONTACT_EMAIL, SUPPORT_EMAIL, APP_URL } from "@/lib/site";
import { Mail, LifeBuoy, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with TradeHound — sales questions, onboarding help, or support for an existing account.",
};

const routes = [
  {
    icon: Rocket,
    title: "Start a trial",
    body: "You don't need to talk to anyone. Onboard your company and the 14-day trial starts automatically.",
    action: { label: "Open the app", href: APP_URL },
  },
  {
    icon: Mail,
    title: "Sales & onboarding",
    body: "Questions about fit, migrating from another tool, or multi-crew setups.",
    action: { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  },
  {
    icon: LifeBuoy,
    title: "Existing customer support",
    body: "Already on TradeHound and need a hand with something specific.",
    action: { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a human"
        intro="Tell us about your shop and what you're trying to fix. We answer every message within one business day."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div className="space-y-4">
              {routes.map((r) => (
                <div
                  key={r.title}
                  className="rounded-xl border border-hairline-strong bg-surface p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-strong">
                    <r.icon className="h-5 w-5 text-ink" />
                  </span>
                  <h3 className="mt-3 text-[16px] font-semibold text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-body">
                    {r.body}
                  </p>
                  <a
                    href={r.action.href}
                    className="mt-3 inline-block font-mono text-[13px] text-link hover:underline"
                    {...(r.action.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {r.action.label} →
                  </a>
                </div>
              ))}
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
