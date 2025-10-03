import { LucideIcon, MonitorSmartphone, Server, Layers, ShoppingCart, Cloud, LifeBuoy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import type { ServiceSlug } from '@/config/site';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const iconMap: Record<ServiceSlug, LucideIcon> = {
  frontend: MonitorSmartphone,
  'backend-apis': Server,
  'full-stack': Layers,
  'ecommerce-cms': ShoppingCart,
  'cloud-devops': Cloud,
  'maintenance-support': LifeBuoy,
};

interface ServiceCardProps {
  slug: ServiceSlug;
  title: string;
  description: string;
}

export function ServiceCard({ slug, title, description }: ServiceCardProps) {
  const Icon = iconMap[slug];

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand/5 dark:from-slate-800/50 dark:to-slate-900/50">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <CardHeader className="relative space-y-4 pb-4">
        <div className="flex items-start justify-between">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <div className="space-y-2">
          <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="relative mt-auto">
        <Button asChild className="w-full group-hover:bg-brand group-hover:text-white transition-all duration-300">
          <Link href={`/services/${slug}`} className="flex items-center gap-2">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
