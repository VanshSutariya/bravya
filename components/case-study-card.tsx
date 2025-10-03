import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CaseStudyCardProps {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  outcomes: string[];
}

export function CaseStudyCard({ slug, title, description, stack, outcomes }: CaseStudyCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
        <div>
          <p className="font-medium text-slate-900 dark:text-slate-100">Stack</p>
          <p>{stack.join(', ')}</p>
        </div>
        <div>
          <p className="font-medium text-slate-900 dark:text-slate-100">Outcomes</p>
          <ul className="mt-1 list-disc space-y-1 pl-4">
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
        <Link href={`/case-studies/${slug}`} className="font-medium text-brand hover:underline">
          Read case study →
        </Link>
      </CardContent>
    </Card>
  );
}
