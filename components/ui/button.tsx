import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60 dark:focus-visible:ring-offset-slate-950',
  {
    variants: {
      variant: {
        default: 'bg-brand text-brand-foreground shadow-soft hover:bg-brand-light',
        secondary:
          'bg-slate-900/5 text-slate-900 hover:bg-slate-900/10 dark:bg-slate-50/10 dark:text-slate-50 dark:hover:bg-slate-50/20',
        ghost:
          'bg-transparent text-slate-900 hover:bg-slate-900/5 dark:text-slate-100 dark:hover:bg-slate-50/10',
        outline:
          'border border-slate-300 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
