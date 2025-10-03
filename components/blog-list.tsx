'use client';

import { useMemo, useState } from 'react';

import { BlogCard } from '@/components/blog-card';

interface BlogListProps {
  posts: {
    slug: string;
    title: string;
    description: string;
    readingTimeText: string;
    categories?: string[];
    tags?: string[];
    date: string;
  }[];
}

export function BlogList({ posts }: BlogListProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return posts;
    return posts.filter((post) => {
      const haystack = [
        post.title,
        post.description,
        ...(post.categories ?? []),
        ...(post.tags ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [posts, query]);

  return (
    <div className="space-y-8">
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search blog posts
        </label>
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Search by keyword, category, or tag"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post) => (
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
      {filtered.length === 0 && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          No posts match your search. Try another keyword.
        </p>
      )}
    </div>
  );
}
