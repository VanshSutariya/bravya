import { Code, Database, Smartphone, ShoppingCart, Settings } from 'lucide-react';
import { technologies } from '@/config/site';
import { AnimatedInView } from '@/components/animated-in-view';

const categoryIcons = {
  frontend: Code,
  backend: Database,
  mobile: Smartphone,
  ecommerce: ShoppingCart,
  devops: Settings,
};

const categoryTitles = {
  frontend: 'Frontend Technologies',
  backend: 'Backend & APIs',
  mobile: 'Mobile Development',
  ecommerce: 'E-commerce & CMS',
  devops: 'DevOps & Tools',
};

export function TechStackShowcase() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          We Work With Any Technology
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          From modern frameworks to legacy systems, we adapt to your existing tech stack. 
          No matter what technology you're using, we can help you build, maintain, and scale your applications.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(technologies).map(([category, techs], categoryIndex) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons];
          const title = categoryTitles[category as keyof typeof categoryTitles];
          
          return (
            <AnimatedInView key={category} delay={categoryIndex * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand/5 dark:border-slate-700/50 dark:from-slate-800/50 dark:to-slate-900/50">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors duration-300">
                      {title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(techs).map(([subCategory, items]) => (
                      <div key={subCategory} className="space-y-2">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 capitalize">
                          {subCategory.replace('_', ' ')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {items.map((item, index) => (
                            <span
                              key={index}
                              className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm transition-all duration-300 hover:bg-brand/10 hover:text-brand dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-brand/20"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedInView>
          );
        })}
      </div>

      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-6 py-3 text-brand">
          <Code className="h-5 w-5" />
          <span className="font-semibold">50+ Technologies Supported</span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Don't see your technology? We're always learning and expanding our expertise.
        </p>
      </div>
    </div>
  );
}
