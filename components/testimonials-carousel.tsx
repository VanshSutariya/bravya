'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { testimonials } from '@/config/site';
import { cn } from '@/lib/utils';

const DISPLAY_INTERVAL = 6000;

export function TestimonialsCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const total = testimonials.length;
  const currentIndex = total > 0 ? index % total : 0;
  const testimonial = total > 0 ? testimonials[currentIndex] : null;

  useEffect(() => {
    if (shouldReduceMotion || total <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, DISPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [shouldReduceMotion, total]);

  useEffect(() => {
    if (total === 0) {
      setIndex(0);
    } else if (index >= total) {
      setIndex(0);
    }
  }, [index, total]);

  if (!testimonial) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 p-8 shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/12 via-white/60 to-transparent dark:via-slate-950/20" />
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative flex min-h-[200px] flex-col justify-between gap-6"
        >
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-brand/80">
              Partner insight
            </h3>
            <p className="text-lg font-medium leading-relaxed text-slate-900 dark:text-slate-100">
              “{testimonial.quote}”
            </p>
          </div>
          <footer className="text-sm text-slate-600 dark:text-slate-400">
            <div className="font-semibold text-slate-900 dark:text-slate-100">{testimonial.name}</div>
            {testimonial.title ? <div>{testimonial.title}</div> : null}
            {testimonial.company ? (
              <div className="text-slate-500 dark:text-slate-500">{testimonial.company}</div>
            ) : null}
          </footer>
        </motion.blockquote>
      </AnimatePresence>
      <div className="relative z-10 mt-8 flex justify-center gap-2">
        {Array.from({ length: total }).map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={cn(
              'h-2 w-2 rounded-full bg-slate-300 transition dark:bg-slate-700',
              dotIndex === currentIndex && 'w-8 bg-brand dark:bg-brand',
            )}
          />
        ))}
      </div>
    </div>
  );
}
