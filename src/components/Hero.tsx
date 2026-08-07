import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 px-6">
      <div className="absolute inset-0 grid-fade pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[40rem] glow pointer-events-none" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-text-dim"
        >
          <Sparkles size={13} className="text-accent" />
          Websites &amp; automations for growing businesses
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-8 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-text-h leading-[1.05]"
        >
          We build fast websites
          <br />
          that <span className="text-gradient">run themselves.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-6 text-lg text-text-dim max-w-2xl mx-auto"
        >
          codematicly is a small studio building high-performance web experiences and
          business automations — so you spend less time on busywork and more time growing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-text-h text-bg px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start a project
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-medium text-text hover:border-text-dim transition-colors"
          >
            See our work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-wider text-text-dim"
        >
          <span>React &amp; Next.js</span>
          <span>Zapier &amp; n8n</span>
          <span>Custom APIs</span>
          <span>AI Workflows</span>
        </motion.div>
      </div>
    </section>
  );
}
