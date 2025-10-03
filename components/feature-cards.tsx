import { Code, Eye, Zap, LifeBuoy } from 'lucide-react';
import { differentiators } from '@/config/site';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedInView } from '@/components/animated-in-view';

const icons = [Code, Eye, Zap, LifeBuoy];

export function FeatureCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {differentiators.map((item, index) => {
        const Icon = icons[index];
        return (
          <AnimatedInView key={item.title} delay={index * 0.1}>
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand/5 dark:from-slate-800/50 dark:to-slate-900/50">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardHeader className="relative space-y-4 pb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedInView>
        );
      })}
    </div>
  );
}
