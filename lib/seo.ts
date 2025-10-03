import { siteConfig } from '@/config/site';

const { name, url, links } = siteConfig;

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo: `${url}/new-logo.png`,
    sameAs: Object.values(links),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: siteConfig.contactEmail,
        areaServed: 'Global',
      },
    ],
  } as const;
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  } as const;
}

export function getBreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}

export function getBlogPostSchema({
  title,
  description,
  slug,
  date,
  tags = [],
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name,
      url,
    },
    publisher: {
      '@type': 'Organization',
      name,
      url,
    },
    keywords: tags.join(', '),
    mainEntityOfPage: `${url}/blog/${slug}`,
  } as const;
}

export function getCaseStudySchema({
  title,
  description,
  slug,
  date,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    datePublished: date,
    url: `${url}/case-studies/${slug}`,
    creator: {
      '@type': 'Organization',
      name,
    },
  } as const;
}
