import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />
  ),
  p: (props) => <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300" {...props} />,
  ul: (props) => <ul className="mt-6 ml-6 list-disc space-y-2" {...props} />,
  ol: (props) => <ol className="mt-6 ml-6 list-decimal space-y-2" {...props} />,
  li: (props) => <li className="text-base leading-7 text-slate-600 dark:text-slate-300" {...props} />,
  a: (props) => (
    <Link className="text-brand underline underline-offset-2" {...props} />
  ),
  code: (props) => (
    <code
      className="rounded bg-slate-900/90 px-1 py-0.5 text-sm text-white dark:bg-slate-200 dark:text-slate-900"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-2xl bg-slate-900 p-6 text-sm text-slate-100 shadow-lg dark:bg-slate-900"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-4 border-brand/60 pl-4 italic text-slate-600 dark:text-slate-300" {...props} />
  ),
};
