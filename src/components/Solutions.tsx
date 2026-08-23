import { motion } from 'framer-motion';
import {
  Brain,
  ScanEye,
  LayoutDashboard,
  MessagesSquare,
  TrendingUp,
  ShoppingBag,
  FileSearch,
  Receipt,
} from 'lucide-react';
import Reveal from './Reveal';

const solutions = [
  {
    icon: Brain,
    title: 'AI Assistants & RAG Systems',
    description:
      'Assistants that answer from your own documents and data — retrieval-augmented, cited, and grounded instead of guessing.',
    stack: ['LangGraph', 'Vector search', 'LLaMA / GPT'],
  },
  {
    icon: ScanEye,
    title: 'Computer Vision Solutions',
    description:
      'Image and video models built into real products — try-on, inspection, detection — optimized until they are fast enough to ship.',
    stack: ['PyTorch', 'GPU batching', 'Inference APIs'],
  },
  {
    icon: LayoutDashboard,
    title: 'Business Platforms',
    description:
      'Inventory, orders, suppliers, staff — the internal systems your operation runs on, with real auth and role-based access.',
    stack: ['React', 'FastAPI', 'PostgreSQL'],
  },
  {
    icon: MessagesSquare,
    title: 'Chat & WhatsApp Bots',
    description:
      'Assistants that live where your customers already are, remember the conversation, and book, answer or triage around the clock.',
    stack: ['n8n', 'WhatsApp API', 'Context memory'],
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description:
      'Risk scoring, forecasting and customer segmentation, delivered as a dashboard your team can act on — not a notebook.',
    stack: ['Scikit-learn', 'Pandas', 'Dashboards'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Storefronts',
    description:
      'Conversion-focused storefronts with fast checkout, product assistants, and order-to-fulfillment flows wired end to end.',
    stack: ['Next.js', 'Stripe', 'Fulfillment sync'],
  },
  {
    icon: FileSearch,
    title: 'Document Intelligence',
    description:
      'Turn a drive full of PDFs into something searchable — extract structured fields, then let people query it in plain language.',
    stack: ['LangChain', 'ChromaDB', 'Docker'],
  },
  {
    icon: Receipt,
    title: 'Lead-to-Invoice Automation',
    description:
      'Capture the lead, score it, draft the proposal, raise the invoice — one pipeline with no copy-paste in between.',
    stack: ['n8n', 'CRM sync', 'Stripe'],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="px-6 py-28 border-t border-border bg-bg-soft/40">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Solutions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-text-h tracking-tight">
              What we build
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-text-dim max-w-sm">
              Whether it starts as a website, a model or a workflow, every build pairs a clean
              interface with something intelligent running underneath.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, description, stack }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-bg p-6 transition-colors duration-300 hover:bg-surface"
            >
              <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-accent via-accent-2 to-violet transition-transform duration-400 group-hover:scale-x-100" />
              <Icon
                size={20}
                className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
              />
              <h3 className="mt-4 text-base font-medium text-text-h">{title}</h3>
              <p className="mt-2 text-sm text-text-dim leading-relaxed">{description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2 py-0.5 text-[11px] text-text-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="text-sm text-text-dim">
            Need something that isn't on this list?{' '}
            <a href="#contact" className="text-accent hover:underline">
              Tell us what you're trying to solve
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
