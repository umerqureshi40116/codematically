import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 30, suffix: '+', label: 'Projects shipped' },
  { value: 2, prefix: '<', suffix: 's', label: 'Avg. page load time' },
  { value: 70, suffix: '%', label: 'Avg. time saved via automation' },
  { value: 98, suffix: '%', label: 'Client retention' },
];

function Counter({ to, duration = 1400 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic, so the number settles rather than stopping dead
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return <span ref={ref}>{n}</span>;
}

export default function Stats() {
  return (
    <section className="px-6 py-16 border-t border-border">
      <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center sm:text-left"
          >
            <div className="text-3xl sm:text-4xl font-semibold text-text-h tracking-tight tabular-nums">
              {s.prefix}
              <Counter to={s.value} />
              {s.suffix}
            </div>
            <div className="mt-1 text-xs sm:text-sm text-text-dim">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
