import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { track } from '../lib/analytics.js';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#pillars', label: 'Services' },
  { href: '#metrics', label: 'Proof' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!drawerRef.current) return;
    if (open) {
      gsap.set(drawerRef.current, { display: 'flex' });
      gsap.fromTo(drawerRef.current, { xPercent: 100 }, { xPercent: 0, duration: 0.5, ease: 'power3.out' });
      gsap.fromTo(
        drawerRef.current.querySelectorAll('a'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, delay: 0.15, duration: 0.5 }
      );
    } else {
      gsap.to(drawerRef.current, {
        xPercent: 100,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => gsap.set(drawerRef.current, { display: 'none' }),
      });
    }
  }, [open]);

  const handleNav = (label) => {
    setOpen(false);
    track('nav_click', { destination: label });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-paper/10' : 'bg-transparent'}`}>
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <a href="#main" className="font-serif text-2xl tracking-tight">
          SUNNUS<span className="text-gold">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => handleNav(l.label)} className="text-sm text-paper/70 hover:text-gold">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-5 !py-2.5" onClick={() => handleNav('CTA')}>
            Start a project
          </a>
        </nav>

        <button aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden">
          <span className="block h-px w-6 bg-paper" />
          <span className="block h-px w-6 bg-paper" />
          <span className="block h-px w-6 bg-paper" />
        </button>
      </div>

      <div ref={drawerRef} className="fixed inset-y-0 right-0 z-50 hidden w-full max-w-sm flex-col gap-8 bg-ink px-8 pt-24 md:hidden" role="dialog" aria-modal="true">
        <button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute right-6 top-6 text-sm text-paper/60">
          Close ✕
        </button>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => handleNav(l.label)} className="font-serif text-3xl">
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={() => handleNav('CTA')} className="btn-primary mt-4 self-start">
          Start a project
        </a>
      </div>
    </header>
  );
}
