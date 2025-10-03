import { logos } from '@/config/site';

export function LogoCloud() {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70">
      <div className="grid gap-4 sm:grid-cols-3">
        {logos.map((partner) => (
          <div
            key={partner.name}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/50 dark:bg-slate-950/80"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-brand/10 opacity-0 transition group-hover:opacity-100 dark:from-slate-900/40 dark:to-brand/20" />
            <div className="relative space-y-2">
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{partner.name}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{partner.sector}</p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                {partner.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
