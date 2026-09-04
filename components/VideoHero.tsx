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
      className="relative h-screen min-h-[720px] overflow-hidden bg-[#f4f2ed] text-[#111111]"
    >
      {/* =========================================================
          FUTURE VIDEO
          بعداً ویدیو را دقیقاً در این قسمت قرار می‌دهیم.
          ========================================================= */}

      <div className="absolute inset-0 bg-[#f4f2ed]" />

      {/* Temporary cinematic placeholder */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(249,115,22,0.10),transparent_35%)]" />

        <div className="absolute -left-[10%] top-[25%] h-[45rem] w-[45rem] rounded-full bg-white/70 blur-[130px]" />

        <div className="absolute -right-[12%] bottom-[-20%] h-[42rem] w-[42rem] rounded-full bg-[#F97316]/[0.07] blur-[150px]" />
      </div>

      {/* Soft overlay that will also work over the future video */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/[0.04]" />

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="section-shell flex h-24 items-center justify-between">
          <div className="shrink-0 text-[#111111]">
            <Logo />
          </div>

          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-9 text-sm font-medium text-black/55 md:flex"
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
            className="rounded-full bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ea6a0d]"
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Hero content */}
      <div className="section-shell relative z-20 flex h-full items-center justify-center">
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
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 12,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion ? 0 : 0.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[10px] font-semibold uppercase tracking-[0.36em] text-black/45 sm:text-xs"
          >
            Ein Blick genügt
          </motion.p>

          <motion.h1
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion ? 0 : 0.2,
              duration: 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-[clamp(4rem,10vw,10rem)] font-semibold leading-[0.84] tracking-[-0.07em]"
          >
            Post?
            <span className="block text-[#F97316]">
              Siehst du.
            </span>
          </motion.h1>

          <motion.p
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
              delay: reduceMotion ? 0 : 0.45,
              duration: 0.8,
            }}
            className="mx-auto mt-8 max-w-xl text-sm leading-6 text-black/50 sm:text-base"
          >
            MailSignal zeigt direkt am Briefkasten,
            ob neue Post angekommen ist.
          </motion.p>
        </motion.div>
      </div>

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
          delay: reduceMotion ? 0 : 0.8,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2 text-center"
        aria-label="Weiter scrollen"
      >
        <div className="mx-auto h-10 w-px bg-gradient-to-b from-black/30 to-transparent" />

        <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.35em] text-black/35">
          Scroll
        </p>
      </motion.a>
    </section>
  );
}
