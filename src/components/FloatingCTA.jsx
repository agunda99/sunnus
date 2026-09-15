import { useEffect, useState } from "react";
import { track } from "../lib/analytics.js";

const INTENTS = [
  "Get a website",
  "Design a logo",
  "Shape your brand strategy",
  "Automate your operations",
];

const CONTACTS = [
  {
    id: "sms",
    label: "Text message",
    detail: "+254 700 000 000",
    color: "bg-sage/85 text-ink",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3v3l4-3h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 16H10.3L9 19v-1H4V4h16v14ZM6 8h12v2H6V8Zm0 4h8v2H6v-2Z"
        />
      </svg>
    ),
    getHref: (message) =>
      `sms:+254700000000?body=${encodeURIComponent(message)}`,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    detail: "Message us directly",
    color: "bg-[#25D366]/85 text-white",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.43-8.43Zm-8.46 18.3h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.84 9.84 0 0 1-1.51-5.26C2.19 6.46 6.61 2.04 12.06 2.04c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.44-4.43 9.85-9.87 9.85Zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.92 8.92 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.2-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.28.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.09 4.5.71.3 1.27.48 1.7.61.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
        />
      </svg>
    ),
    getHref: (message) =>
      `https://wa.me/254700000000?text=${encodeURIComponent(message)}`,
  },
  {
    id: "telegram",
    label: "Telegram",
    detail: "Start a Telegram chat",
    color: "bg-[#229ED9]/85 text-white",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21.9 3.2 18.55 20c-.25 1.19-.92 1.48-1.87.92l-5.15-3.8-2.49 2.4c-.28.28-.52.52-1.07.52l.38-5.25 9.55-8.63c.42-.38-.09-.59-.65-.21L5.44 13.4.36 11.81c-1.1-.34-1.12-1.1.23-1.63L20.46 2.5c.92-.34 1.72.21 1.44.7Z"
        />
      </svg>
    ),
    getHref: (message) =>
      `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(message)}`,
  },
  {
    id: "email",
    label: "Email",
    detail: "hello@sunnus.co.ke",
    color: "bg-paper/85 text-ink",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 4a8 8 0 1 0 4.9 14.32l-1.2-1.6A5.99 5.99 0 1 1 18 12v1.2a1.8 1.8 0 0 1-3.38.86A4.2 4.2 0 1 1 15 9.04V9h2v4.2a3.8 3.8 0 0 0 7.6 0V12A12 12 0 1 0 12 24a11.9 11.9 0 0 0 6.45-1.88l-1.1-1.67A9.9 9.9 0 1 1 22.6 12v1.2a1.8 1.8 0 0 1-3.6 0V12a7 7 0 1 0-2.8 5.6l-1.2-1.6A5 5 0 1 1 15 12v1.2a3 3 0 1 0 6 0V12a9 9 0 1 0-9 9Z"
        />
      </svg>
    ),
    getHref: (message) =>
      `mailto:hello@sunnus.co.ke?subject=${encodeURIComponent("Let's work together")}&body=${encodeURIComponent(message)}`,
  }
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
    track("floating_cta_contact", { intent, channel: id });
    setOpen(false);
  };

  return (
    <aside
      className="group floating-cta fixed bottom-3 right-3 z-30 flex max-h-[calc(100svh-1.5rem)] flex-col items-end rounded-[2rem] border border-paper/10 bg-paper/[0.035] p-2 backdrop-blur-xl sm:bottom-6 sm:right-6 sm:max-h-[calc(100svh-3rem)]"
      aria-label="Start a conversation"
    >
      <div className="floating-cta__prompt mb-2 mr-1 max-w-[min(calc(100vw-2rem),18rem)] rounded-2xl border border-paper/15 bg-ink/50 px-4 py-2.5 text-right shadow-xl shadow-black/20 backdrop-blur-md sm:mb-3 sm:mr-2">
        <p className="flex items-center justify-end gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" /> Online now
        </p>
        <p className="mt-1 text-sm font-medium text-paper">
          {intent}{" "}
          <span className="text-gold" aria-hidden="true">
            →
          </span>
        </p>
      </div>

      <div
        id="floating-contact-options"
        className={`${open ? "flex" : "hidden"} floating-cta__options mb-2 max-h-[calc(100svh-11rem)] flex-col items-end gap-2 overflow-y-auto overscroll-contain pr-1 group-hover:flex group-focus-within:flex sm:mb-3 sm:max-h-[calc(100svh-12rem)]`}
      >
        {CONTACTS.map((contact) => (
          <a
            key={contact.id}
            href={contact.getHref(message)}
            target={contact.id === "email" ? undefined : "_blank"}
            rel={contact.id === "email" ? undefined : "noreferrer"}
            onClick={() => handleContact(contact.id)}
            title={`${contact.label}: ${contact.detail}`}
            aria-label={`${contact.label}: ${contact.detail}`}
            className={`floating-cta__option flex items-center gap-2 ${contact.color} rounded-full border border-white/20 p-1 pr-2.5 shadow-lg shadow-black/30 backdrop-blur-md transition-all hover:-translate-x-1 hover:brightness-110`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 [&>svg]:h-[1.1rem] [&>svg]:w-[1.1rem]">
              {contact.icon}
            </span>
            <span className="text-xs font-medium">{contact.label}</span>
            <span className="text-xs opacity-60" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>

      <button
        type="button"
        aria-label="Open customer care chat options"
        aria-expanded={open}
        aria-controls="floating-contact-options"
        onClick={() => setOpen((current) => !current)}
        className="floating-cta__button relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-ink bg-gold text-ink shadow-[0_8px_30px_rgba(201,169,110,0.3)] transition-transform hover:-translate-y-1 focus-visible:-translate-y-1 sm:h-[4.5rem] sm:w-[4.5rem]"
      >
        <span
          className="absolute inset-0 -z-10 rounded-full border border-gold/60 animate-ping opacity-30"
          aria-hidden="true"
        />
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
            d="M8 17v-3a8 8 0 0 1 16 0v3M8 16H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2V16Zm16 0h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2V16ZM12 25h8"
          />
        </svg>
      </button>
    </aside>
  );
}
