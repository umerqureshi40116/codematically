import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Orbit CRM',
    category: 'SaaS Dashboard + Automation',
    description:
      'A lead-to-invoice automation pipeline built on top of a custom React dashboard — cut manual admin work by 70%.',
    tags: ['React', 'n8n', 'Stripe'],
    gradient: 'from-accent/20 via-accent-2/10 to-transparent',
  },
  {
    title: 'Northside Realty',
    category: 'Marketing Website',
    description:
      'A fast, SEO-first real estate site with automated listing sync from the MLS feed, no manual data entry.',
    tags: ['React', 'Next.js', 'API Sync'],
    gradient: 'from-accent-2/20 via-violet/10 to-transparent',
  },
  {
    title: 'Fable Studio',
    category: 'E-commerce + AI',
    description:
      'A storefront with an AI product assistant and automated order-to-fulfillment workflow across three tools.',
    tags: ['React', 'AI Agent', 'Automation'],
    gradient: 'from-violet/20 via-accent/10 to-transparent',
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Selected work
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-text-h tracking-tight">
              Recent projects
            </h2>
          </div>
          <p className="text-sm text-text-dim max-w-sm">
            A mix of client work and internal builds — every project pairs a clean interface
            with automation underneath.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className={`h-40 w-full bg-gradient-to-br ${p.gradient} relative`}>
                <div className="absolute inset-0 grid-fade opacity-60" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs text-text-dim">{p.category}</span>
                    <h3 className="mt-1 text-lg font-medium text-text-h">{p.title}</h3>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-text-dim group-hover:text-text-h group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </div>
                <p className="mt-3 text-sm text-text-dim leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] text-text-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
