import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/layout";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-hairline bg-canvas-soft">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display-xl mt-3 text-ink">{title}</h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
              {intro}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
