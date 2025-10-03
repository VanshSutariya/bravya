import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { getBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';

const roles = [
  {
    title: 'Senior Full-stack Engineer',
    type: 'Remote (Americas)',
    summary:
      'Lead cross-functional squads delivering complex React/Next.js applications with a focus on performance and maintainability.',
    link: 'mailto:careers@bravyaweb.com?subject=Senior%20Full-stack%20Engineer',
  },
  {
    title: 'Product Designer',
    type: 'Remote (EMEA)',
    summary:
      'Own discovery workshops, UX research, and design systems for data-heavy web products.',
    link: 'mailto:careers@bravyaweb.com?subject=Product%20Designer',
  },
];

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Bravya Web Solutions and build resilient products with a distributed team that values craft, empathy, and measurable outcomes.',
  openGraph: {
    title: 'Careers | Bravya Web Solutions',
    description:
      'Join Bravya Web Solutions and build resilient products with a distributed team that values craft, empathy, and measurable outcomes.',
    images: ['/api/og?title=Careers'],
  },
};

const breadcrumbJsonLd = JSON.stringify(
  getBreadcrumbSchema({
    items: [
      { name: 'Home', url: `${siteConfig.url}` },
      { name: 'Careers', url: `${siteConfig.url}/careers` },
    ],
  }),
);

export default function CareersPage() {
  return (
    <>
      <Section className="pt-24">
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Build the future of web platforms with us
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We are a remote-first, senior team that values accountability, experimentation, and craft. If you love shipping impactful products, let’s talk.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/70">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{role.title}</h2>
                <p className="mt-1 text-sm font-medium text-brand">{role.type}</p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{role.summary}</p>
                <Button asChild variant="secondary" className="mt-4">
                  <Link href={role.link}>Apply now</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-dashed border-brand/40 bg-brand/5 p-6 text-sm text-slate-700 dark:text-slate-200">
            Don’t see a role that fits? Email{' '}
            <a href="mailto:careers@bravyaweb.com" className="text-brand underline">
              careers@bravyaweb.com
            </a>{' '}
            with your portfolio and how you like to work.
          </div>
        </Container>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
    </>
  );
}
