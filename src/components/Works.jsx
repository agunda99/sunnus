const caseStudies = [
  {
    title: 'Identity Systems',
    text: 'From visual direction to a complete operating identity for confident market entry.',
    type: '01 Brand Architecture',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=75',
  },
  {
    title: 'Growth Platform',
    text: 'A modern web presence that converts attention into qualified demand and momentum.',
    type: '02 Web Experience',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=75',
  },
  {
    title: 'Automation Layer',
    text: 'Operational systems that connect people, tools and information into one flow.',
    type: '03 Automation',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=75',
  },
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
            <article key={item.title} className="group bg-paper/[0.02] p-8 transition-shadow duration-300 hover:shadow-[0_18px_45px_rgb(0_0_0_/_0.35),0_0_0_1px_rgb(201_169_110_/_0.22)]">
              <div className="mb-16 flex justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">{item.type}</span>
                <span className="text-paper/40 transition group-hover:text-gold">↗</span>
              </div>
              <div className="min-h-[180px] overflow-hidden border-b border-paper/10 pb-8">
                <div className="relative mb-8 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="900"
                    height="320"
                    className="h-32 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <span className="pointer-events-none absolute inset-2 border border-gold/70 transition-colors group-hover:border-gold" aria-hidden="true" />
                </div>
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
