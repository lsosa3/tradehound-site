import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="display-lg mt-3 text-ink">This page took a service call</h1>
      <p className="mt-3 max-w-sm text-body">
        The page you&rsquo;re looking for isn&rsquo;t here. Let&rsquo;s get you
        back to solid ground.
      </p>
      <Button href="/" size="lg" className="mt-8">
        Back to home
      </Button>
    </Container>
  );
}
