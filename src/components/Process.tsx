const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We start with a short call to understand your goals, workflows, and where time or revenue is leaking.',
  },
  {
    number: '02',
    title: 'Design & Plan',
    description:
      'You get a clear scope, timeline, and a design direction before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We build in the open — regular check-ins and a staging link so you can watch it take shape.',
  },
  {
    number: '04',
    title: 'Launch & Automate',
    description:
      'We ship to production and wire up the automations that keep things running without manual upkeep.',
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-28 border-t border-border bg-bg-soft/40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-text-h tracking-tight">
            A simple, transparent way of working
          </h2>
          <p className="mt-4 text-text-dim">
            No black boxes. You know what's happening at every stage, from first call to
            launch day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.number} className="relative pl-0">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold text-text-dim/40 tabular-nums">
                  {s.number}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden lg:block h-px flex-1 bg-border" />
                )}
              </div>
              <h3 className="mt-4 text-lg font-medium text-text-h">{s.title}</h3>
              <p className="mt-2 text-sm text-text-dim leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
