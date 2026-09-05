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
      className="relative h-screen min-h-[720px] overflow-hidden bg-black text-white"
    >
      {/* Fullscreen video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/mailsignal-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic overlays */}
      <div className="pointer-events-none absolute inset-0 bg-black/[0.08]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.36)_30%,rgba(0,0,0,0.08)_58%,transparent_78%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="section-shell">
          <div className="flex h-24 items-center justify-between">
            <div className="shrink-0 text-white">
              <Logo />
            </div>

            <nav
              aria-label="Hauptnavigation"
              className="hidden items-center gap-9 text-sm font-medium text-white/70 md:flex"
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
              className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/20"
            >
              Kontakt
            </a>
          </div>

          {/* Thin premium divider */}
          <div className="h-px w-full bg-white/15" />
        </div>
      </header>

      {/* Hero content */}
      <div className="section-shell relative z-20 flex h-full items-end pb-24 sm:pb-28 lg:items-center lg:pb-0">
        <div className="max-w-2xl lg:translate-y-8">
          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: reduceMotion ? 0 : 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/65 sm:text-xs"
          >
            MailSignal
          </motion.p>

          <motion.h1
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 34,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: reduceMotion ? 0 : 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[10ch] text-[clamp(3.2rem,5.4vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white"
          >
            Post da.
            <span className="block text-[#F97316]">
              Sofort sichtbar.
            </span>
          </motion.h1>

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: reduceMotion ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-lg text-base leading-7 text-white/72 sm:text-lg sm:leading-8"
          >
            MailSignal zeigt direkt am Briefkasten,
            wenn neue Post angekommen ist.
          </motion.p>

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: reduceMotion ? 0 : 0.58,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#F97316] hover:text-white"
            >
              So funktioniert&apos;s

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#produkt"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/[0.08] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:border-white/50 hover:bg-white/[0.14]"
            >
              Produkt entdecken
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom meta */}
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
          delay: reduceMotion ? 0 : 0.9,
          duration: 1,
        }}
        className="absolute bottom-8 right-8 z-30 hidden text-right lg:block"
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
          Ohne App
        </p>

        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
          Ohne WLAN
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#cinematic"
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
          delay: reduceMotion ? 0 : 1,
          duration: 0.9,
        }}
        className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 text-center sm:block"
        aria-label="Weiter scrollen"
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  scaleY: [0.35, 1, 0.35],
                  opacity: [0.25, 0.8, 0.25],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mx-auto h-10 w-px origin-top bg-gradient-to-b from-white/70 to-transparent"
        />

        <p className="mt-3 text-[8px] font-medium uppercase tracking-[0.34em] text-white/45">
          Scroll
        </p>
      </motion.a>
    </section>
  );
}
