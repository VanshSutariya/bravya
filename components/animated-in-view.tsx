'use client';

import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedInView({ children, className, delay = 0 }: AnimatedInViewProps) {
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: 'easeOut', delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
