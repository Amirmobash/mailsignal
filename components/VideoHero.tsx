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
      className="relative min-h-screen overflow-hidden bg-white text-[#171717]"
    >
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="section-shell flex h-24 items-center justify-between">
          <a
            href="#video-hero"
            aria-label="Zurück zum Seitenanfang"
            className="shrink-0"
          >
            <div className="[&_svg]:text-[#171717]">
              <Logo />
            </div>
          </a>

          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-9 text-sm text-black/50 md:flex"
          >
            {navigationItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="transition-colors duration-300 hover:text-black"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="rounded-full border border-[#F97316]/35 px-5 py-2.5 text-sm font-medium text-[#171717] transition duration-300 hover:border-[#F97316] hover:bg-[#FFF4EC]"
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Soft background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[18%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-[#F97316]/[0.05] blur-[150px]" />

        <div className="absolute right-[10%] top-[48%] h-[26rem] w-[26rem] rounded-full bg-[#F97316]/[0.04] blur-[160px]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FFF8F2] to-transparent" />
      </div>

      <div className="section-shell relative z-10 flex min-h-screen items-center pt-24">
        <div className="grid w-full items-center gap-12 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Left copy */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 28,
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
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#F97316]">
              MailSignal
            </p>

            <h1 className="mt-6 text-balance text-[clamp(3.5rem,7vw,7.4rem)] font-semibold leading-[0.91] tracking-[-0.065em]">
              Nie wieder umsonst
              <span className="block text-[#F97316]">
                zum Briefkasten.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-black/52 sm:text-lg sm:leading-8">
              MailSignal zeigt auf einen Blick, ob neue Post angekommen ist.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#produkt"
                className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(249,115,22,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(249,115,22,0.26)]"
              >
                Produkt entdecken
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-medium text-black/70 transition duration-300 hover:border-black/20 hover:text-black"
              >
                So funktioniert es
              </a>
            </div>
          </motion.div>

          {/* Future video area */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.97,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion ? 0 : 0.12,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] border border-black/[0.08] bg-[#F7F7F5] shadow-[0_28px_80px_rgba(40,25,10,0.12)]">
              {/* Video placeholder background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(249,115,22,0.08),transparent_34%)]" />

              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/[0.03]" />

              <div className="relative flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#F97316]/25 bg-white shadow-[0_10px_30px_rgba(249,115,22,0.12)]">
                    <div className="ml-1 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-[#F97316]" />
                  </div>

                  <p className="mt-5 text-sm font-medium text-black/45">
                    Video folgt
                  </p>
                </div>
              </div>

              {/* Small accent */}
              <div className="pointer-events-none absolute bottom-6 right-6 h-2.5 w-2.5 rounded-full bg-[#F97316] shadow-[0_0_16px_rgba(249,115,22,0.55)]" />
            </div>

            {/* Decorative soft panel */}
            <div className="pointer-events-none absolute -bottom-7 left-[8%] right-[8%] -z-10 h-24 rounded-[2rem] bg-[#F97316]/[0.07] blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
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
          delay: 0.8,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.32em] text-black/28">
          Scroll
        </p>

        <div className="mx-auto mt-3 h-8 w-px bg-gradient-to-b from-black/25 to-transparent" />
      </motion.div>
    </section>
  );
}
