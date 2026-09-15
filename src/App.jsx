import { lazy, Suspense } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from './components/Problem'
import { useLenis } from "./hooks/useLenis";
import { useEffect } from "react";
import { trackScrollDepth } from "./lib/analytics";
import FloatingCTA from "./components/FloatingCTA";

// Below-fold sections load lazily to keep initial bundle tiny.
const Pillars = lazy(() => import("./components/Pillars"));
const Metrics = lazy(() => import("./components/Metrics"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  useLenis();

  useEffect(() => trackScrollDepth(), []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Suspense fallback={<SectionFallback />}>
          <Pillars />
          <Metrics />
          <Works />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingCTA />
    </>
  );
}

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />;
}