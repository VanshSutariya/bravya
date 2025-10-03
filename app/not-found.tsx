import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';

export default function NotFound() {
  return (
    <Section className="pt-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">404</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          We couldn’t find that page
        </h1>
        <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
          The page you’re looking for may have moved. Double-check the URL or head back to the homepage.
        </p>
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
      </Container>
    </Section>
  );
}
