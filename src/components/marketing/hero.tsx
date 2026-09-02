import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { ProductMock } from "./product-mock";
import { APP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* sky-blue atmospheric wash — hero only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 0%, var(--color-sky-light) 0%, color-mix(in srgb, var(--color-sky-mid) 45%, white) 40%, transparent 78%)",
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl pt-16 text-center sm:pt-24">
          <p className="th-rise inline-flex items-center gap-2 rounded-full border border-hairline-strong bg-surface/80 px-3 py-1 text-[13px] font-medium text-body backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            14-day free trial · no credit card
          </p>

          <h1 className="th-rise display-mega mt-6 text-ink">
            Speak the job.
            <br />
            Send the invoice.
          </h1>

          <p className="th-rise mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body">
            TradeHound turns a technician&rsquo;s voice memo into a client-ready
            report, line items your office reviews, and an invoice with a payment
            link — while dispatch, collections, and maintenance run in the
            background.
          </p>

          <div className="th-rise mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={APP_URL} size="lg">
              Start free trial
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>
        </div>

        <div className="th-rise relative mx-auto mt-16 max-w-5xl pb-8 sm:mt-20 sm:pb-16">
          <ProductMock />
        </div>
      </Container>
    </section>
  );
}
