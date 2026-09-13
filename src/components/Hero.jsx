import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { track } from '../lib/analytics.js';

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('.hero-line', { opacity: 1, y: 0 });
        return;
      }
      const tl = gsap.timeline({ delay: 0.25 });
      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-line span', { y: '110%', duration: 0.9, stagger: 0.09, ease: 'power3.out' }, '-=0.3')
        .from('.hero-sub', { y: 24, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero-cta > *', { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.4')
        .from('.hero-bg', { scale: 1.15, opacity: 0, duration: 1.4, ease: 'power2.out' }, 0);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="hero-bg absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(10,10,11,0.55), rgba(10,10,11,0.85)), url('https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=2000&q=70')" }} aria-hidden="true" />

      <div className="container-x w-full">
        <p className="hero-eyebrow mb-6 font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Brand · Technology · Data — Nairobi
        </p>
        <h1 className="max-w-4xl font-serif text-fluid-h1 leading-[1.02] tracking-tight">
          <span className="hero-line block overflow-hidden">
            <span className="block">You build the</span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span className="block">business. <em className="text-gold not-italic">We build</em></span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span className="block">everything else.</span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-xl text-fluid-body text-paper/70">
          Brand identity, technology infrastructure, and data intelligence — integrated into a single system for Kenyan enterprises that refuse to plateau.
        </p>

        <div className="hero-cta mt-10 flex flex-wrap gap-4">
          <a href="#contact" onClick={() => track('cta_click', { location: 'hero', variant: 'primary' })} className="btn-primary">
            Start a conversation <span aria-hidden>→</span>
          </a>
          <a href="#work" onClick={() => track('cta_click', { location: 'hero', variant: 'ghost' })} className="btn-ghost">
            See our work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-xs text-paper/40 sm:block">
        Scroll ↓
      </div>
    </section>
  );
}
