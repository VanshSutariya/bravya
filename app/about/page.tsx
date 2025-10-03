import type { Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { techStack, timeline } from '@/config/site';
import { getBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { team, values } from '@/content/team';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the Bravya Web Solutions team focused on shipping resilient, accessible web platforms with measurable outcomes.',
  openGraph: {
    title: 'About | Bravya Web Solutions',
    description:
      'Meet the Bravya Web Solutions team focused on shipping resilient, accessible web platforms with measurable outcomes.',
    images: ['/api/og?title=About'],
  },
};

const breadcrumbJsonLd = JSON.stringify(
  getBreadcrumbSchema({
    items: [
      { name: 'Home', url: `${siteConfig.url}` },
      { name: 'About', url: `${siteConfig.url}/about` },
    ],
  }),
);

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24">
        <Container className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Crafting reliable products with accountable teams
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Bravya Web Solutions is a distributed team of senior engineers, designers, and product leaders who believe the best software is transparent, performant, and measurable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/70">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{value.title}</h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Leadership team</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-center shadow-sm dark:border-slate-800/70 dark:bg-slate-950/70">
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src={member.avatar}
                      alt={`Photo of ${member.name}`}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-brand">{member.role}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Milestones</h2>
            <ol className="space-y-4 border-l border-slate-200 pl-6 dark:border-slate-800">
              {timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-3 mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.year}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Tooling we trust</h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
    </>
  );
}
