import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { services } from '@/config/site';
import { siteConfig } from '@/config/site';
import { serviceDetails } from '@/content/services';
import { getBreadcrumbSchema } from '@/lib/seo';

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const detail = serviceDetails[params.slug as keyof typeof serviceDetails];
  if (!detail) {
    return {};
  }

  const title = `${detail.title} Services`;
  const description = detail.hero.summary.slice(0, 155);

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Bravya Web Solutions`,
      description,
      url: `${siteConfig.url}/services/${params.slug}`,
      images: [`/api/og?title=${encodeURIComponent(detail.title)}`],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const detail = serviceDetails[params.slug as keyof typeof serviceDetails];
  if (!detail) {
    notFound();
  }

  const breadcrumbJsonLd = JSON.stringify(
    getBreadcrumbSchema({
      items: [
        { name: 'Home', url: `${siteConfig.url}` },
        { name: 'Services', url: `${siteConfig.url}/services` },
        { name: detail.title, url: `${siteConfig.url}/services/${params.slug}` },
      ],
    }),
  );

  return (
    <>
      <Section className="pt-24">
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              {detail.title}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {detail.hero.intro}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">{detail.hero.summary}</p>
            <Button asChild size="lg">
              <Link href="/contact">Discuss your project</Link>
            </Button>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Deliverables</h2>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                  {detail.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Tools & Tech</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {detail.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-brand/10 px-3 py-1 text-sm text-brand">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <aside className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/70">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {detail.result.headline}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{detail.result.description}</p>
            </aside>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">FAQs</h2>
            <div className="space-y-4">
              {detail.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200/70 bg-white/70 p-6 dark:border-slate-800/70 dark:bg-slate-950/70"
                >
                  <summary className="cursor-pointer text-base font-semibold text-slate-900 transition group-open:text-brand dark:text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
    </>
  );
}
