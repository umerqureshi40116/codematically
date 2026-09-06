import Logo from './Logo';

const links = {
  Studio: [
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
  ],
  Contact: [
    { label: 'codematically@gmail.com', href: 'mailto:codematically@gmail.com' },
    { label: 'umerqureshi40116@gmail.com', href: 'mailto:umerqureshi40116@gmail.com' },
    { label: '+92 345 5040529', href: 'tel:+923455040529' },
    { label: 'Start a project', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <a href="#top" aria-label="Codematically home">
            <Logo size={28} />
          </a>
          <p className="mt-4 text-sm text-text-dim max-w-xs">
            Web development, applied AI and automation services for businesses that want to
            move faster online.
          </p>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h3 className="text-sm font-medium text-text-h mb-4">{title}</h3>
            <ul className="space-y-3">
              {items.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-text-dim hover:text-text-h transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-dim">
          <span>&copy; {new Date().getFullYear()} Codematically. All rights reserved.</span>
          <span>Built with React &amp; Tailwind — deployed on Vercel.</span>
        </div>
      </div>
    </footer>
  );
}
