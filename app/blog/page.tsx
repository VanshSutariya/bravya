import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { BlogList } from '@/components/blog-list';
import { getBlogPosts } from '@/lib/mdx';
import { getBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides and insights on performance, DX, security, and growth from the Bravya engineering team.',
  openGraph: {
    title: 'Blog | Bravya Web Solutions',
    description:
      'Guides and insights on performance, DX, security, and growth from the Bravya engineering team.',
    images: ['/api/og?title=Blog'],
  },
};

const breadcrumbJsonLd = JSON.stringify(
  getBreadcrumbSchema({
    items: [
      { name: 'Home', url: `${siteConfig.url}` },
      { name: 'Blog', url: `${siteConfig.url}/blog` },
    ],
  }),
);

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = Array.from(new Set(posts.flatMap((post) => post.categories ?? [])));

  return (
    <>
      <Section className="pt-24">
        <Container className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Build elegantly, scale responsibly
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Deep dives on performance, security, and shipping velocity from the Bravya engineering team.
            </p>
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span key={category} className="rounded-full bg-brand/10 px-3 py-1 text-sm text-brand">
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
          <BlogList posts={posts} />
        </Container>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
    </>
  );
}
