const stats = [
  { value: '30+', label: 'Projects shipped' },
  { value: '<2s', label: 'Avg. page load time' },
  { value: '70%', label: 'Avg. time saved via automation' },
  { value: '98%', label: 'Client retention' },
];

export default function Stats() {
  return (
    <section className="px-6 py-16 border-t border-border">
      <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <div className="text-3xl sm:text-4xl font-semibold text-text-h tracking-tight">
              {s.value}
            </div>
            <div className="mt-1 text-xs sm:text-sm text-text-dim">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
