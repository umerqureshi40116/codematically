import { Code2, Workflow, Rocket, LineChart, Bot, Plug } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Marketing sites, product dashboards and e-commerce storefronts — built with React and shipped fast, on a stack that scales.',
    points: ['Custom design & build', 'Blazing performance', 'SEO-ready foundations'],
  },
  {
    icon: Workflow,
    title: 'Business Automations',
    description:
      'We connect your tools and remove manual work — from lead intake to invoicing — so your team runs on autopilot.',
    points: ['Zapier / n8n / Make', 'CRM & email workflows', 'Custom internal tools'],
  },
  {
    icon: Bot,
    title: 'AI Integrations',
    description:
      'Practical AI features baked into your product or ops — chat assistants, content pipelines, and smart data processing.',
    points: ['AI chat & support agents', 'Document & data pipelines', 'LLM-powered features'],
  },
  {
    icon: Plug,
    title: 'API & Integrations',
    description:
      'Stitch your stack together. We build reliable integrations between the tools you already use and love.',
    points: ['Third-party API integration', 'Webhooks & sync jobs', 'Payment & billing setup'],
  },
  {
    icon: Rocket,
    title: 'Launch & Hosting',
    description:
      'From domain to deploy — we ship on modern infrastructure with CI/CD, so updates go live in minutes, not weeks.',
    points: ['Vercel / cloud deploys', 'CI/CD pipelines', 'Monitoring & uptime'],
  },
  {
    icon: LineChart,
    title: 'Growth & Optimization',
    description:
      'Post-launch, we keep tuning — performance, conversion, and analytics — so the site keeps earning its keep.',
    points: ['Core Web Vitals tuning', 'Conversion-focused UX', 'Analytics & reporting'],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-text-h tracking-tight">
            Everything you need to launch and scale online
          </h2>
          <p className="mt-4 text-text-dim">
            Two core disciplines, working together: sharp web development and smart
            automation — so your site looks great and your operations run without you.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, points }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-text-dim/40 transition-colors"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-bg-soft border border-border text-accent">
                <Icon size={18} />
              </div>
              <h3 className="mt-5 text-lg font-medium text-text-h">{title}</h3>
              <p className="mt-2 text-sm text-text-dim leading-relaxed">{description}</p>
              <ul className="mt-4 space-y-1.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-text-dim">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
