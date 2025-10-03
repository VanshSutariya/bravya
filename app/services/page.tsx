import type { Metadata } from 'next';
import Link from 'next/link';

import { ServiceCard } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { services } from '@/config/site';
import { siteConfig } from '@/config/site';
import { getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore frontend, backend, and full-stack services that help teams ship performant, secure products with confidence.',
  openGraph: {
    title: 'Services | Bravya Web Solutions',
    description:
      'Explore frontend, backend, and full-stack services that help teams ship performant, secure products with confidence.',
    images: ['/api/og?title=Services'],
  },
};

const breadcrumbJsonLd = JSON.stringify(
  getBreadcrumbSchema({
    items: [
      { name: 'Home', url: `${siteConfig.url}` },
      { name: 'Services', url: `${siteConfig.url}/services` },
    ],
  }),
);

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-24">
        <Container className="space-y-8">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Services engineered for outcomes
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We assemble cross-functional teams to solve complex product challenges—shipping faster, scaling safely, and optimizing every release.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.excerpt}
              />
            ))}
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Start a project</Link>
          </Button>
        </Container>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
    </>
  );
}
