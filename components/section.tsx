import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'default' | 'muted' | 'inverted';
}

export function Section({ className, background = 'default', ...props }: SectionProps) {
  const backgroundClass =
    background === 'muted'
      ? 'bg-slate-50 dark:bg-slate-900/30'
      : background === 'inverted'
        ? 'bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900'
        : '';
  return <section className={cn('py-20 sm:py-24', backgroundClass, className)} {...props} />;
}
