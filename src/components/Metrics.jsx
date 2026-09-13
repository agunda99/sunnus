const metrics = [
  { value: '360°', label: 'brand + tech operating model' },
  { value: '01', label: 'alignment layer across strategy' },
  { value: '04', label: 'capability streams for growth' },
  { value: '24/7', label: 'system visibility and momentum' },
];

export default function Metrics() {
  return (
    <section id="metrics" className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-4">
          {metrics.map((m) => (
            <article key={m.label} className="border-t border-gold/50 pt-8">
              <div className="metric-num font-serif text-fluid-h2">{m.value}</div>
              <p className="mt-4 max-w-[170px] text-xs uppercase tracking-[0.2em] text-paper/60">{m.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
