import type { Metadata } from 'next';

import { CaseStudyCard } from '@/components/case-study-card';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { getCaseStudies } from '@/lib/mdx';
import { getBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Anonymized case studies showcasing how Bravya Web Solutions drives measurable outcomes across SaaS, healthcare, and commerce.',
  openGraph: {
    title: 'Case Studies | Bravya Web Solutions',
    description:
      'Anonymized case studies showcasing how Bravya Web Solutions drives measurable outcomes across SaaS, healthcare, and commerce.',
    images: ['/api/og?title=Case%20Studies'],
  },
};

const breadcrumbJsonLd = JSON.stringify(
  getBreadcrumbSchema({
    items: [
      { name: 'Home', url: `${siteConfig.url}` },
      { name: 'Case Studies', url: `${siteConfig.url}/case-studies` },
    ],
  }),
);

export const revalidate = 3600;

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <Section className="pt-24">
        <Container className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Proof in the outcomes
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              These anonymized engagements highlight how we accelerate teams, derisk launches, and exceed KPIs across industries.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.slug}
                slug={study.slug}
                title={study.title}
                description={study.description}
                stack={study.stack ?? []}
                outcomes={study.outcomes ?? []}
              />
            ))}
          </div>
        </Container>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
    </>
  );
}
