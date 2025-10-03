import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { inter, firaCode } from '@/lib/fonts';
import { getOrganizationSchema, getWebsiteSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Bravya Web Solutions',
    template: '%s | Bravya Web Solutions',
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'Bravya Web Solutions',
    description: siteConfig.description,
    siteName: 'Bravya Web Solutions',
    locale: 'en_US',
    images: [{ url: '/api/og?title=Bravya%20Web%20Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bravya Web Solutions',
    description: siteConfig.description,
    images: ['/api/og?title=Bravya%20Web%20Solutions'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = JSON.stringify(getOrganizationSchema());
const websiteJsonLd = JSON.stringify(getWebsiteSchema());

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} flex min-h-screen flex-col bg-white font-sans antialiased dark:bg-slate-950`}
      >
        <ThemeProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <Analytics />
        <Script id="schema-org-organization" type="application/ld+json">
          {organizationJsonLd}
        </Script>
        <Script id="schema-org-website" type="application/ld+json">
          {websiteJsonLd}
        </Script>
      </body>
    </html>
  );
}
