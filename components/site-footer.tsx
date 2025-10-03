import Link from 'next/link';

import { navLinks, siteConfig } from '@/config/site';

const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white dark:border-slate-800/60 dark:bg-slate-950">
      <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Link href="/" className="text-lg font-semibold">
            Bravya Web Solutions
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200">Connect</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-brand">
                {siteConfig.contactEmail}
              </a>
            </li>
            <li>
              <a href={siteConfig.links.linkedin} className="hover:text-brand" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={siteConfig.links.twitter} className="hover:text-brand" target="_blank" rel="noopener noreferrer">
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200/70 py-4 text-center text-sm text-slate-500 dark:border-slate-800/60 dark:text-slate-500">
        © {new Date().getFullYear()} Bravya Web Solutions. All rights reserved.
      </div>
    </footer>
  );
}
