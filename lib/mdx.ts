import fs from 'node:fs/promises';
import path from 'node:path';
import type { ReactNode } from 'react';

import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';

import { mdxComponents } from '@/components/mdx';

interface MDXFrontmatter {
  title: string;
  description: string;
  date: string;
  categories?: string[];
  tags?: string[];
  stack?: string[];
  outcomes?: string[];
  problem?: string;
  approach?: string;
  slug?: string;
  coverImage?: string;
}

export interface MDXContent<TFrontmatter extends MDXFrontmatter = MDXFrontmatter> {
  metadata: TFrontmatter & { slug: string; readingTimeText: string };
  content: ReactNode;
}

const blogDirectory = path.join(process.cwd(), 'content', 'blog');
const caseStudiesDirectory = path.join(process.cwd(), 'content', 'case-studies');

async function readMDXFile(slug: string, directory: string) {
  const filePath = path.join(directory, `${slug}.mdx`);
  const source = await fs.readFile(filePath, 'utf-8');
  return source;
}

export async function getAllSlugs(directory: string) {
  const files = await fs.readdir(directory);
  return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));
}

export async function getBlogPosts() {
  const slugs = await getAllSlugs(blogDirectory);
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await getBlogPost(slug);
      return metadata;
    }),
  );
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getBlogPost(slug: string) {
  const source = await readMDXFile(slug, blogDirectory);
  const { frontmatter, content } = await compileMDX<MDXFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  const metadata = {
    ...frontmatter,
    slug,
    readingTimeText: readingTime(source).text,
  };

  return { metadata, content } satisfies MDXContent;
}

export async function getCaseStudies() {
  const slugs = await getAllSlugs(caseStudiesDirectory);
  const studies = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await getCaseStudy(slug);
      return metadata;
    }),
  );
  return studies.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getCaseStudy(slug: string) {
  const source = await readMDXFile(slug, caseStudiesDirectory);
  const { frontmatter, content } = await compileMDX<MDXFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  const metadata = {
    ...frontmatter,
    slug,
    readingTimeText: readingTime(source).text,
  };

  return { metadata, content } satisfies MDXContent;
}
