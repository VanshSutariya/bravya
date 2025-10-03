import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Bravya Web Solutions handles personal data, analytics, and communications.',
};

export default function PrivacyPage() {
  return (
    <Section className="pt-24">
      <Container className="prose prose-slate max-w-3xl dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>Last updated: January 1, 2025</p>
        <p>
          Bravya Web Solutions collects the minimum amount of information needed to respond to inquiries and operate our services. We do not sell your data.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect contact details submitted via forms, usage analytics from privacy-first tools, and service logs required to secure our infrastructure.
        </p>
        <h2>How We Use Information</h2>
        <ul>
          <li>Respond to project inquiries and provide proposals.</li>
          <li>Improve our website performance and accessibility.</li>
          <li>Maintain security, monitor for abuse, and comply with law.</li>
        </ul>
        <h2>Your Choices</h2>
        <p>
          You can request data access or deletion by emailing{' '}
          <a href="mailto:privacy@bravyaweb.com">privacy@bravyaweb.com</a>.
        </p>
        <h2>Data Retention</h2>
        <p>
          We retain inquiry records for up to 24 months unless required longer for contractual or legal reasons.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions contact{' '}
          <a href="mailto:privacy@bravyaweb.com">privacy@bravyaweb.com</a>.
        </p>
      </Container>
    </Section>
  );
}
