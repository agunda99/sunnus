export default function Footer() {
  return (
    <footer className="border-t border-paper/10 py-12">
      <div className="container-x flex flex-wrap items-center justify-between gap-8">
        <a href="#main" className="font-serif text-2xl tracking-tight">
          SUNNUS<span className="text-gold">.</span>
        </a>
        <nav className="flex flex-wrap gap-8 text-sm text-paper/60">
          <a href="#pillars" className="hover:text-gold">Services</a>
          <a href="#work" className="hover:text-gold">Work</a>
          <a href="#metrics" className="hover:text-gold">Proof</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-paper/40">© 2025 SUNNUS</span>
      </div>
    </footer>
  );
}
