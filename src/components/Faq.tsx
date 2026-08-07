import { useState } from 'react';
import { Plus } from 'lucide-react';

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
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-text-h tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-text-h">{f.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-text-dim transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                  }`}
                  style={{ display: 'grid' }}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-text-dim leading-relaxed pr-8">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
