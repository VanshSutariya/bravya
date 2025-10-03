import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    mdx: {
      options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
      },
    },
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default nextConfig;
