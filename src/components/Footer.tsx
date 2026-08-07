const links = {
  Studio: [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
  ],
  Contact: [
    { label: 'hello@codematicly.com', href: 'mailto:hello@codematicly.com' },
    { label: 'Start a project', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2 font-semibold text-text-h tracking-tight">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent via-accent-2 to-violet text-bg font-bold text-sm">
              c
            </span>
            codematicly
          </a>
          <p className="mt-4 text-sm text-text-dim max-w-xs">
            Web development and automation services for businesses that want to move faster
            online.
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
          <span>&copy; {new Date().getFullYear()} codematicly. All rights reserved.</span>
          <span>Built with React &amp; Tailwind — deployed on Vercel.</span>
        </div>
      </div>
    </footer>
  );
}
