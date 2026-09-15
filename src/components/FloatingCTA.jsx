import { useEffect, useState } from 'react';
import { track } from '../lib/analytics.js';

const INTENTS = [
  'Get a website',
  'Design a logo',
  'Shape your brand strategy',
  'Automate your operations',
];

const CONTACTS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    detail: 'Message us directly',
    icon: 'WA',
    getHref: (message) => `https://wa.me/254700000000?text=${encodeURIComponent(message)}`,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    detail: 'Start a Telegram chat',
    icon: 'TG',
    getHref: (message) => `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(message)}`,
  },
  {
    id: 'email',
    label: 'Email',
    detail: 'hello@sunnus.co.ke',
    icon: '@',
    getHref: (message) => `mailto:hello@sunnus.co.ke?subject=${encodeURIComponent("Let's work together")}&body=${encodeURIComponent(message)}`,
  },
];

export default function FloatingCTA() {
  const [intentIndex, setIntentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const intent = INTENTS[intentIndex];
  const message = `Hi Sunnus, I’d like to ${intent.toLowerCase()}.`;

  useEffect(() => {
    if (open) return undefined;
    const interval = window.setInterval(() => {
      setIntentIndex((current) => (current + 1) % INTENTS.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, [open]);

  const handleContact = (id) => {
    track('floating_cta_contact', { intent, channel: id });
    setOpen(false);
  };

  return (
    <aside className="floating-cta fixed bottom-4 right-4 z-30 sm:bottom-6 sm:right-6" aria-label="Start a conversation">
      {open && (
        <div id="floating-contact-options" className="mb-3 w-[min(calc(100vw-2rem),21rem)] overflow-hidden rounded border border-paper/15 bg-[#151517] shadow-2xl shadow-black/40">
          <div className="border-b border-paper/10 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">Choose your channel</p>
            <p className="mt-1 text-sm text-paper/60">Let’s talk about: <span className="text-paper">{intent}</span></p>
          </div>
          <div className="grid gap-px bg-paper/10">
            {CONTACTS.map((contact) => (
              <a
                key={contact.id}
                href={contact.getHref(message)}
                target={contact.id === 'email' ? undefined : '_blank'}
                rel={contact.id === 'email' ? undefined : 'noreferrer'}
                onClick={() => handleContact(contact.id)}
                className="flex items-center gap-3 bg-[#151517] px-4 py-3 text-paper transition-colors hover:bg-paper/10"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 font-mono text-[10px] font-bold text-gold" aria-hidden="true">{contact.icon}</span>
                <span>
                  <span className="block text-sm">{contact.label}</span>
                  <span className="block text-xs text-paper/45">{contact.detail}</span>
                </span>
                <span className="ml-auto text-paper/40" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        aria-expanded={open}
        aria-controls="floating-contact-options"
        onClick={() => setOpen((current) => !current)}
        className="group flex w-full items-center gap-3 rounded-full border border-gold/60 bg-gold px-4 py-3 text-left text-ink shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5 sm:px-5"
      >
        <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ink" />
        </span>
        <span className="min-w-0">
          <span className="block font-mono text-[9px] uppercase tracking-[0.18em] opacity-60">Have a project in mind?</span>
          <span className="block truncate text-sm font-medium">{intent} <span aria-hidden="true">→</span></span>
        </span>
        <span className="ml-auto text-lg leading-none transition-transform group-aria-expanded:rotate-45" aria-hidden="true">+</span>
      </button>
    </aside>
  );
}