import { Inter, Fira_Code as FiraCode } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const firaCode = FiraCode({
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['400', '500'],
  display: 'swap',
});
