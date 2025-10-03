import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { getCaseStudy, getCaseStudies } from '@/lib/mdx';
import { getBreadcrumbSchema, getCaseStudySchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';

interface CaseStudyPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = await getCaseStudy(params.slug).catch(() => null);
  if (!study) {
    return {};
  }

  const { title, description } = study.metadata;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Bravya Web Solutions`,
      description,
      url: `${siteConfig.url}/case-studies/${params.slug}`,
      images: [`/api/og?title=${encodeURIComponent(title)}`],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const study = await getCaseStudy(params.slug).catch(() => null);
  if (!study) {
    notFound();
  }

  const breadcrumbJsonLd = JSON.stringify(
    getBreadcrumbSchema({
      items: [
        { name: 'Home', url: `${siteConfig.url}` },
        { name: 'Case Studies', url: `${siteConfig.url}/case-studies` },
        { name: study.metadata.title, url: `${siteConfig.url}/case-studies/${params.slug}` },
      ],
    }),
  );

  const schemaJsonLd = JSON.stringify(
    getCaseStudySchema({
      title: study.metadata.title,
      description: study.metadata.description,
      slug: study.metadata.slug,
      date: study.metadata.date,
    }),
  );

  return (
    <>
      <Section className="pt-24">
        <Container className="space-y-16">
          <div className="rounded-[2.5rem] border border-slate-200/80 bg-white/90 px-8 py-12 shadow-xl dark:border-slate-800/70 dark:bg-slate-950/70">
            <div className="flex flex-col gap-10">
              <div className="space-y-4">
                <span className="inline-flex rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-brand">
                  Case study
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                  {study.metadata.title}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300">{study.metadata.description}</p>
                {study.metadata.stack && study.metadata.stack.length > 0 ? (
                  <div className="flex flex-wrap gap-2 text-sm">
                    {study.metadata.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-brand"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-3 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/80">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Problem</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{study.metadata.problem}</p>
                </div>
                <div className="space-y-3 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/80">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Approach</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{study.metadata.approach}</p>
                </div>
                <div className="space-y-3 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/80">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Outcomes</h2>
                  {(study.metadata.outcomes?.length ?? 0) > 0 ? (
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {study.metadata.outcomes?.map((outcome) => (
                        <li key={outcome} className="flex gap-2">
                          <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Outcome metrics are under NDA; reach out to learn how we can tailor similar results for your team.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <article className="prose prose-slate max-w-3xl dark:prose-invert">
            {study.content}
          </article>
        </Container>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJsonLd }} />
    </>
  );
}
