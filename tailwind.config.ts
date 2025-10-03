import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,md,mdx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4F46E5',
          foreground: '#FFFFFF',
          light: '#6366F1',
          dark: '#312E81',
        },
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 10px 30px -20px rgba(79, 70, 229, 0.4)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate, forms, typography],
};

export default config;
