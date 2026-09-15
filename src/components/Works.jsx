const caseStudies = [
  { title: 'Identity Systems', text: 'From visual direction to a complete operating identity for confident market entry.', type: '01 Brand Architecture' },
  { title: 'Growth Platform', text: 'A modern web presence that converts attention into qualified demand and momentum.', type: '02 Web Experience' },
  { title: 'Automation Layer', text: 'Operational systems that connect people, tools and information into one flow.', type: '03 Automation' },
];

export default function Works() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Selected Direction</p>
            <h2 className="mt-4 max-w-2xl font-serif text-fluid-h2 leading-[1.08]">Work that turns clarity into traction.</h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper/50">03 / systems</span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.title} className="group border border-paper/10 bg-paper/[0.02] p-8 transition hover:border-gold/70">
              <div className="mb-16 flex justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">{item.type}</span>
                <span className="text-paper/40 transition group-hover:text-gold">↗</span>
              </div>
              <div className="min-h-[180px] border-b border-paper/10 pb-8">
                <div className="mb-8 h-32 w-full bg-gradient-to-br from-gold/40 to-terra/20" aria-hidden="true" />
              </div>
              <h3 className="mt-8 font-serif text-3xl text-paper">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-paper/62">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
