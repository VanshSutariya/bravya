import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact-form';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { faqItems, siteConfig } from '@/config/site';
import { getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Share your project goals with Bravya Web Solutions. We respond within two business days with next steps.',
  openGraph: {
    title: 'Contact | Bravya Web Solutions',
    description:
      'Share your project goals with Bravya Web Solutions. We respond within two business days with next steps.',
    images: ['/api/og?title=Contact'],
  },
};

const breadcrumbJsonLd = JSON.stringify(
  getBreadcrumbSchema({
    items: [
      { name: 'Home', url: `${siteConfig.url}` },
      { name: 'Contact', url: `${siteConfig.url}/contact` },
    ],
  }),
);

export default function ContactPage() {
  return (
    <>
      <Section className="pt-24">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-brand">Get in touch</p>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Tell us about your roadmap
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                We typically respond within two business days. Share goals, constraints, and any supporting docs so we can align the right team.
              </p>
            </div>
            <ContactForm />
          </div>
          <aside className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/70">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Contact</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Email us at{' '}
                <a className="text-brand underline" href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Mini FAQ</h2>
              <ul className="mt-4 space-y-4">
                {faqItems.map((faq) => (
                  <li key={faq.question}>
                    <p className="font-medium text-slate-900 dark:text-white">{faq.question}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
    </>
  );
}
