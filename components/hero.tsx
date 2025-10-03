import Image from 'next/image';

import { AnimatedInView } from '@/components/animated-in-view';

export function Hero() {
  const stats = [
    { value: '100+', label: 'Completed Projects' },
    { value: '5+', label: 'Years of Experience' },
    { value: '50+', label: 'Global Customers' },
    { value: '20', label: 'Countries Clients Served' },
  ];

  return (
    <div className="relative isolate flex w-full flex-col overflow-hidden bg-slate-950 text-white -mt-16 pt-16 pb-16 min-h-[620px] sm:pb-20 lg:pb-24 lg:h-screen">
      <Image
        src="/images/91627.jpg"
        alt="Engineer collaborating with an intelligent robot"
        fill
        className="-z-20 object-cover object-center"
        priority
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
      <AnimatedInView className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="space-y-6">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Sculpt Your Thoughts into  <span className="text-orange-400">Digital Reality</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/85">
            We partner with forward-thinking teams to craft software that blends exceptional product strategy,
            human-centered design, and resilient engineering.
          </p>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 pt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm"
            >
              <dt className="text-sm text-white/70">{stat.label}</dt>
              <dd className="text-3xl font-semibold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </AnimatedInView>
    </div>
  );
}
