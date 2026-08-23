import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const headline = ['We', 'build', 'fast', 'websites'];

const marquee = [
  'React & Next.js',
  'FastAPI',
  'LangChain & LangGraph',
  'n8n & Zapier',
  'PostgreSQL',
  'Docker',
  'Custom APIs',
  'AI Workflows',
  'Pinecone & ChromaDB',
];

export default function Hero() {
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 600], [0, 120]);
  const fade = useTransform(scrollY, [0, 420], [1, 0]);

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-20 px-6">
      <div className="absolute inset-0 grid-fade pointer-events-none" />

      <motion.div
        style={{ y: glowY }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[40rem] glow pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.12, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-accent-2/10 blur-3xl pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 25, 0], y: [0, 25, -20, 0], scale: [1, 0.92, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-violet/10 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-text-dim"
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex"
          >
            <Sparkles size={13} className="text-accent" />
          </motion.span>
          Websites, AI &amp; automations for growing businesses
        </motion.div>

        <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-text-h leading-[1.05]">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            that <span className="text-gradient animate-gradient">run themselves.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 text-lg text-text-dim max-w-2xl mx-auto"
        >
          Codematically is a small studio building high-performance web experiences, AI
          systems and business automations — so you spend less time on busywork and more
          time growing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-text-h text-bg px-6 py-3 text-sm font-medium"
          >
            Start a project
            <ArrowUpRight size={16} />
          </motion.a>
          <motion.a
            href="#solutions"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-medium text-text hover:border-accent/60 transition-colors"
          >
            See what we build
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="relative mt-16 mask-fade-x overflow-hidden"
        aria-hidden
      >
        <motion.div
          className="flex w-max gap-10 text-xs uppercase tracking-wider text-text-dim"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
              {item}
              <span className="h-1 w-1 rounded-full bg-accent/50" />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
