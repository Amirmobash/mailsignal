'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Logo } from '@/components/Logo';

const navigationItems = [
  {
    label: 'Produkt',
    href: '#produkt',
  },
  {
    label: 'So funktioniert es',
    href: '#how-it-works',
  },
  {
    label: 'Anwendungen',
    href: '#use-cases',
  },
];

export function VideoHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="video-hero"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="section-shell flex h-24 items-center justify-between">
          <a
            href="#video-hero"
            aria-label="Zurück zum Seitenanfang"
            className="shrink-0"
          >
            <Logo />
          </a>

          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-9 text-sm text-white/55 md:flex"
          >
            {navigationItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="transition-colors duration-300 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/75 transition duration-300 hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Placeholder background for future video */}
      <div className="absolute inset-0 bg-black" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,198,42,0.08),transparent_32%)]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffc62a]">
            MailSignal
          </p>

          <h1 className="mt-6 text-balance text-[clamp(3.2rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
            Sichtbar,
            <span className="block text-white/35">
              wenn Post da ist.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/48 sm:text-lg sm:leading-8">
            Hier wird später das Intro-Video von MailSignal abgespielt.
          </p>
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="absolute bottom-7 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.32em] text-white/28">
            Scroll
          </p>

          <div className="mx-auto mt-3 h-8 w-px bg-gradient-to-b from-white/35 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
