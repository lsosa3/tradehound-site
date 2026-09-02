import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { APP_URL } from "@/lib/site";

export function CtaBand({
  heading = "Put your evenings back",
  sub = "Start a 14-day free trial. No credit card, no setup call — onboard your company and run a real job through it today.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-lg text-ink">{heading}</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-body">
            {sub}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={APP_URL} size="lg">
              Start free trial
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact sales
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
