import { motion } from 'framer-motion';

type Props = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

/** Codematically brand mark: a code chevron with an automation node. */
export default function Logo({ size = 30, withWordmark = true, className = '' }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
        whileHover={{ rotate: -6, scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      >
        <defs>
          <linearGradient id="cm-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#6366f1" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#0a0d1a" stroke="#1e2439" strokeWidth="1.5" />
        <motion.path
          d="M36 20L22 32L36 44"
          stroke="url(#cm-mark)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
        <motion.circle
          cx="45"
          cy="32"
          r="4"
          fill="url(#cm-mark)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 400, damping: 14 }}
        />
      </motion.svg>
      {withWordmark && (
        <span className="font-semibold tracking-tight text-text-h">Codematically</span>
      )}
    </span>
  );
}
