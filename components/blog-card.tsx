import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  categories?: string[];
  date: string;
}

export function BlogCard({ slug, title, description, readingTime, categories = [], date }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{readingTime}</span>
        </div>
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((category) => (
              <span key={category} className="rounded-full bg-brand/10 px-3 py-1 text-brand">
                {category}
              </span>
            ))}
          </div>
        )}
        <Link href={`/blog/${slug}`} className="font-medium text-brand hover:underline">
          Read article →
        </Link>
      </CardContent>
    </Card>
  );
}
