import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#work', label: 'Work' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold text-text-h tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent via-accent-2 to-violet text-bg font-bold text-sm">
            c
          </span>
          codematicly
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-text-dim">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-text-h transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-text-h text-bg px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Start a project
          <ArrowUpRight size={15} />
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-text-h"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-4 text-text-dim">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-text-h">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-text-h text-bg px-4 py-2 text-sm font-medium"
          >
            Start a project
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
