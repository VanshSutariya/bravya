import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { getBlogPost, getBlogPosts } from '@/lib/mdx';
import { getBlogPostSchema, getBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) {
    return {};
  }

  const { title, description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Bravya Web Solutions`,
      description,
      url: `${siteConfig.url}/blog/${params.slug}`,
      images: [`/api/og?title=${encodeURIComponent(title)}`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) {
    notFound();
  }

  const breadcrumbJsonLd = JSON.stringify(
    getBreadcrumbSchema({
      items: [
        { name: 'Home', url: `${siteConfig.url}` },
        { name: 'Blog', url: `${siteConfig.url}/blog` },
        { name: post.metadata.title, url: `${siteConfig.url}/blog/${params.slug}` },
      ],
    }),
  );

  const schemaJsonLd = JSON.stringify(
    getBlogPostSchema({
      title: post.metadata.title,
      description: post.metadata.description,
      slug: post.metadata.slug,
      date: post.metadata.date,
      tags: post.metadata.tags,
    }),
  );

  return (
    <>
      <Section className="pt-24">
        <Container className="space-y-10">
          <article className="prose prose-slate max-w-3xl dark:prose-invert">
            <header>
              <p className="text-sm uppercase tracking-widest text-brand">Insights</p>
              <h1>{post.metadata.title}</h1>
              <p className="lead">{post.metadata.description}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <span>{new Date(post.metadata.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.metadata.readingTimeText}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(post.metadata.categories ?? []).map((category) => (
                  <span key={category} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                    {category}
                  </span>
                ))}
                {(post.metadata.tags ?? []).map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </header>
            {post.content}
          </article>
        </Container>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJsonLd }} />
    </>
  );
}
