const services = [
  { title: 'Brand Strategy', detail: 'Identity systems, market positioning, creative direction, naming, voice and visual rules.', tag: '01 / Strategy' },
  { title: 'Web Experience', detail: 'High-converting websites, landing flows, conversion journeys and purposeful digital architecture.', tag: '02 / Digital' },
  { title: 'Automation', detail: 'Operations systems, custom tooling, process maps and workflow intelligence for faster execution.', tag: '03 / Systems' },
  { title: 'Data Intelligence', detail: 'Measurement design, reporting models and performance loops that make teams sharper.', tag: '04 / Intelligence' },
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Operating Capabilities</p>
            <h2 className="mt-4 max-w-2xl font-serif text-fluid-h2 leading-[1.08]">The capability stack behind momentum.</h2>
          </div>
          <a href="#contact" className="btn-ghost">Plan the system</a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="border border-paper/10 p-8 transition hover:border-gold/70 hover:bg-paper/[0.03]">
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">{service.tag}</span>
                <span className="text-2xl text-gold">0{index + 1}</span>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-3xl text-paper">{service.title}</h3>
                <p className="max-w-md leading-relaxed text-paper/62">{service.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
