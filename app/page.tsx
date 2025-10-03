import Link from 'next/link';

import { Hero } from '@/components/hero';
import { FeatureCards } from '@/components/feature-cards';
import { ProcessSteps } from '@/components/process-steps';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { LogoCloud } from '@/components/logo-cloud';
import { ServiceCard } from '@/components/service-card';
import { CaseStudyCard } from '@/components/case-study-card';
import { BlogCard } from '@/components/blog-card';
import { TechStackShowcase } from '@/components/tech-stack-showcase';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { AnimatedInView } from '@/components/animated-in-view';
import { services } from '@/config/site';
import { getBlogPosts, getCaseStudies } from '@/lib/mdx';

export const revalidate = 3600;

export default async function HomePage() {
  const [caseStudies, blogPosts] = await Promise.all([getCaseStudies(), getBlogPosts()]);

  const caseStudyTeasers = caseStudies.slice(0, 3);
  const blogTeasers = blogPosts.slice(0, 3);

  return (
    <>
      <Section className="pt-0 sm:pt-0 pb-20 sm:pb-24">
        <Hero />
        <Container className="space-y-16 pt-16">
          <AnimatedInView>
            <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Why Bravya
                </h2>
                <FeatureCards />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How we work</h2>
                <ProcessSteps />
              </div>
            </div>
          </AnimatedInView>
        </Container>
      </Section>

      <Section background="muted">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Service Highlights</h2>
            <p className="text-slate-600 dark:text-slate-300">
              From discovery to launch, we assemble the right team for your product and growth.
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
        </Container>
      </Section>

      <Section background="muted">
        <Container>
          <TechStackShowcase />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-brand">
              Executive proof points
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white lg:text-4xl">
              Industry leaders retain Bravya to ship resilient, audit-ready platforms
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              From capital markets to 3PL giants, we embed cross-functional squads that couple evidence-led product strategy with rigorous engineering governance.
            </p>
            <TestimonialsCarousel />
          </div>
          <LogoCloud />
        </Container>
      </Section>

      <Section background="muted">
        <Container className="space-y-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Case Studies</h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                See how we solved complex challenges for teams like yours.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link href="/case-studies">View all</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseStudyTeasers.map((study) => (
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

      <Section>
        <Container className="space-y-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Insights & Resources</h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Practical playbooks on performance, DX, and scaling resilient products.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link href="/blog">View all</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogTeasers.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                readingTime={post.readingTimeText}
                categories={post.categories}
                date={post.date}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section background="inverted" className="relative overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_45%)]" />
          <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand/25 opacity-70 blur-3xl animate-pulse" />
        </div>
        <Container className="relative flex max-w-4xl flex-col items-center gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 px-10 py-16 text-center text-white shadow-[0_25px_60px_-30px_rgba(59,130,246,0.65)] backdrop-blur dark:border-slate-200/40 dark:bg-white/80 dark:text-slate-900">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70 dark:text-slate-500">
            Let’s build together
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to ship your next milestone?</h2>
          <p className="max-w-2xl text-base text-white/80 dark:text-slate-700">
            We co-create a delivery plan, assemble the squad, and stay hands-on through launch.
          </p>
          <ul className="flex flex-col gap-3 text-sm text-white/70 dark:text-slate-600 sm:flex-row sm:gap-6">
            <li className="flex items-center justify-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-white/60" />1-week discovery
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-white/60" />Launch playbook in 10 days
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-white/60" />Embedded delivery squad
            </li>
          </ul>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-900/90">
              <Link href="/contact">Start a project</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 dark:border-slate-400 dark:bg-transparent dark:text-slate-900 dark:hover:bg-slate-100"
            >
              <Link href="/services">View services</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
