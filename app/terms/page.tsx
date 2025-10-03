import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Bravya Web Solutions terms governing the use of our website and services.',
};

export default function TermsPage() {
  return (
    <Section className="pt-24">
      <Container className="prose prose-slate max-w-3xl dark:prose-invert">
        <h1>Terms of Service</h1>
        <p>Last updated: January 1, 2025</p>
        <h2>Use of Website</h2>
        <p>
          By accessing this site you agree not to misuse content, attempt to breach security, or interfere with our services.
        </p>
        <h2>Project Engagements</h2>
        <p>
          Statements on this site are not binding proposals. Any engagement with Bravya Web Solutions requires a signed statement of work.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          All content on this site remains the property of Bravya Web Solutions or its partners. Do not reproduce without permission.
        </p>
        <h2>Disclaimer</h2>
        <p>
          The site is provided “as is”. We make no warranties regarding accuracy, availability, or fitness for purpose.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          Bravya Web Solutions is not liable for indirect or consequential damages arising from use of this site.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Email{' '}
          <a href="mailto:legal@bravyaweb.com">legal@bravyaweb.com</a>.
        </p>
      </Container>
    </Section>
  );
}
