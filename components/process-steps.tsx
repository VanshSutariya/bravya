import { Search, Palette, Wrench, Rocket } from 'lucide-react';
import { processSteps } from '@/config/site';
import { AnimatedInView } from '@/components/animated-in-view';

const stepIcons = [Search, Palette, Wrench, Rocket];

export function ProcessSteps() {
  return (
    <div className="space-y-7">
      {processSteps.map((step, index) => {
        const Icon = stepIcons[index];
        const isLast = index === processSteps.length - 1;
        
        return (
          <AnimatedInView key={step.title} delay={index * 0.1}>
            <div className="group relative flex items-start gap-5">
              {/* Step Number & Icon */}
              <div className="relative flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-brand/20 text-brand transition-all duration-300 group-hover:from-brand/20 group-hover:to-brand/30 group-hover:scale-105">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-lg">
                  {index + 1}
                </div>
                {/* Connecting Line */}
                {!isLast && (
                  <div className="absolute left-1/2 top-14 h-7 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand/30 to-transparent" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-3 pb-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            </div>
          </AnimatedInView>
        );
      })}
    </div>
  );
}
