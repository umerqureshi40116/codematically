import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="px-6 py-28 border-t border-border relative overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-96 w-[40rem] glow pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl rounded-3xl border border-border bg-surface p-8 sm:p-14 grid gap-10 lg:grid-cols-2"
      >
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Get in touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-text-h tracking-tight">
            Let's build something that works while you sleep.
          </h2>
          <p className="mt-4 text-text-dim max-w-md">
            Tell us about your project or the manual work you're ready to automate away. We
            reply within one business day.
          </p>

          <div className="mt-8 space-y-3 text-sm text-text-dim">
            <div className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-accent" />
              <a
                href="mailto:codematically@gmail.com"
                className="hover:text-text-h transition-colors"
              >
                codematically@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-accent" />
              <a
                href="mailto:umerqureshi40116@gmail.com"
                className="hover:text-text-h transition-colors"
              >
                umerqureshi40116@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-accent" />
              <a href="tel:+923455040529" className="hover:text-text-h transition-colors">
                +92 345 5040529
              </a>
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center rounded-2xl border border-border bg-bg-soft p-10"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 350, damping: 16, delay: 0.1 }}
              >
                <CheckCircle2 size={32} className="text-accent" />
              </motion.span>
              <h3 className="mt-4 text-lg font-medium text-text-h">Message sent</h3>
              <p className="mt-2 text-sm text-text-dim">
                Thanks for reaching out — we'll get back to you within one business day.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-text-dim" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-soft px-3.5 py-2.5 text-sm text-text-h placeholder:text-text-dim/60 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-text-dim" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="jane@company.com"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-soft px-3.5 py-2.5 text-sm text-text-h placeholder:text-text-dim/60 outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-text-dim" htmlFor="message">
                  What do you need help with?
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us a bit about your project..."
                  className="mt-1.5 w-full rounded-lg border border-border bg-bg-soft px-3.5 py-2.5 text-sm text-text-h placeholder:text-text-dim/60 outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-text-h text-bg px-5 py-3 text-sm font-medium disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send message'}
                {!loading && <ArrowUpRight size={16} />}
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
