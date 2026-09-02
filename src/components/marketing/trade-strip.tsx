import { Container } from "@/components/ui/layout";
import { trades } from "@/lib/site";

export function TradeStrip() {
  return (
    <div className="border-y border-hairline bg-canvas-soft py-8">
      <Container>
        <p className="text-center text-[13px] font-medium uppercase tracking-[0.14em] text-muted">
          Built for residential &amp; light-commercial service work
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trades.map((t) => (
            <span
              key={t}
              className="text-[15px] font-semibold tracking-[-0.01em] text-body"
            >
              {t}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
