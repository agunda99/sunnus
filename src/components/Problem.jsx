export default function Problem() {
  const issues = [
    { label: 'Strategy drift', text: 'Your brand says one thing while your team, website, and offer speak differently.' },
    { label: 'Digital friction', text: 'Content is scattered, offers are unclear, and the buyer path creates unnecessary friction.' },
    { label: 'Ghost systems', text: 'Manual tasks, duplicate data, and disconnected tools slow reinvention.' },
  ];

  return (
    <section id="problem" className="relative py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">The Operating Gap</p>
            <h2 className="mt-6 max-w-xl font-serif text-fluid-h2 leading-[1.08]">
              Growth demands a system, not a set of disconnected tactics.
            </h2>
          </div>
          <div className="h-px w-24 bg-gold" />
          <p className="max-w-lg text-fluid-body leading-relaxed text-paper/65">
            Most leadership teams know the destination, but the system around it is too fragmented to carry the momentum.
          </p>
          <a href="#contact" className="btn-ghost">
            Diagnose the gap
          </a>
        </div>

        <div className="grid gap-4">
          {issues.map((issue, index) => (
            <article key={issue.label} className="group border border-paper/10 bg-paper/[0.02] p-6 transition hover:bg-paper/[0.05]">
              <div className="flex items-start gap-4">
                <span className="font-mono text-gold text-sm">0{index + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl text-paper">{issue.label}</h3>
                  <p className="mt-3 text-paper/60 leading-relaxed">{issue.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
