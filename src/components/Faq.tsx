import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'A marketing website usually takes 2–4 weeks. Automation projects vary depending on how many tools we’re connecting, but most are live within 1–3 weeks.',
  },
  {
    q: 'Do you work with existing websites, or only new builds?',
    a: 'Both. We regularly rebuild aging sites and layer automation onto existing stacks — you don’t need to start from scratch to work with us.',
  },
  {
    q: 'What tools do you automate with?',
    a: 'Zapier, n8n, Make, and custom code when off-the-shelf tools hit a wall. We pick whatever’s most reliable and cost-effective for your case.',
  },
  {
    q: 'Can you help after launch?',
    a: 'Yes — most clients stay on a light monthly retainer for updates, monitoring, and new automations as their business grows.',
  },
  {
    q: 'What does pricing look like?',
    a: 'Projects are quoted flat-fee based on scope after a discovery call, so there are no surprises. Retainers are billed monthly.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-text-h tracking-tight">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="text-sm sm:text-base font-medium text-text-h group-hover:text-accent transition-colors">
                    {f.q}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-text-dim transition-transform duration-300 ${
                      isOpen ? 'rotate-135 text-accent' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-text-dim leading-relaxed pr-8">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
