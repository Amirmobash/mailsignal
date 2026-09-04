'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

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

export function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.5],
    [1, 1, 0],
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, reduceMotion ? 0 : -55],
  );

  const deviceScale = useTransform(
    scrollYProgress,
    [0, 0.72],
    [1, reduceMotion ? 1 : 0.9],
  );

  const deviceY = useTransform(
    scrollYProgress,
    [0, 0.72],
    [0, reduceMotion ? 0 : -20],
  );

  const ledOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.28, 0.48],
    [0, 0.3, 1],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0.16, 0.34, 0.54],
    [0, 0.18, 0.56],
  );

  const messageOpacity = useTransform(
    scrollYProgress,
    [0.32, 0.48, 0.68],
    [0, 1, 1],
  );

  const messageY = useTransform(
    scrollYProgress,
    [0.32, 0.48],
    [18, 0],
  );

  return (
    <section
      ref={sectionRef}
      id="cinematic"
      className="relative h-[135vh] bg-white text-[#171717]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* Header */}
        <header className="absolute inset-x-0 top-0 z-30">
          <div className="section-shell flex h-24 items-center justify-between">
            <div className="shrink-0">
              <Logo />
            </div>

            <nav
              aria-label="Hauptnavigation"
              className="hidden items-center gap-9 text-sm text-black/45 md:flex"
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
              className="rounded-full border border-[#F97316]/35 px-5 py-2.5 text-sm font-medium text-black/65 transition duration-300 hover:border-[#F97316] hover:bg-[#FFF5ED] hover:text-black"
            >
              Kontakt
            </a>
          </div>
        </header>

        {/* Soft white / orange background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_67%,rgba(249,115,22,0.045),transparent_32%)]" />

        <div className="pointer-events-none absolute left-[10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-[#F97316]/[0.025] blur-[150px]" />

        <div className="pointer-events-none absolute right-[5%] bottom-[5%] h-[34rem] w-[34rem] rounded-full bg-[#F97316]/[0.035] blur-[170px]" />

        {/* Main orange glow behind device */}
        <motion.div
          style={{
            opacity: glowOpacity,
          }}
          className="pointer-events-none absolute left-1/2 top-[65%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/14 blur-[170px]"
        />

        <div className="relative mx-auto flex h-full max-w-[1500px] flex-col items-center justify-center px-6 pt-24">
          {/* Title */}
          <motion.div
            style={{
              opacity: titleOpacity,
              y: titleY,
            }}
            className="absolute top-[11%] z-20 text-center sm:top-[10%]"
          >
            <h1 className="text-[clamp(2.7rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#171717]">
              Nie wieder umsonst
            </h1>

            <p className="mt-3 text-[clamp(2.7rem,6.5vw,6.4rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#F97316]">
              zum Briefkasten.
            </p>
          </motion.div>

          {/* Device */}
          <motion.div
            style={{
              scale: deviceScale,
              y: deviceY,
            }}
            className="relative mt-72 w-[min(80vw,610px)] sm:mt-80"
          >
            <div
              className="relative"
              style={{
                WebkitMaskImage:
                  'radial-gradient(ellipse 64% 66% at 50% 55%, black 58%, rgba(0,0,0,0.92) 70%, transparent 100%)',
                maskImage:
                  'radial-gradient(ellipse 64% 66% at 50% 55%, black 58%, rgba(0,0,0,0.92) 70%, transparent 100%)',
              }}
            >
              <Image
                src="/images/hero-device-off.png"
                alt="MailSignal Gerät mit Solarpanel und LED-Anzeige"
                width={1536}
                height={1536}
                priority
                sizes="(max-width: 768px) 88vw, 610px"
                className="h-auto w-full select-none object-contain"
              />
            </div>

            {/* LED point */}
            <motion.div
              style={{
                opacity: ledOpacity,
              }}
              className="pointer-events-none absolute left-[50%] top-[74.2%] z-20 h-[2.2%] w-[2.2%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] shadow-[0_0_10px_3px_rgba(249,115,22,0.95),0_0_34px_12px_rgba(249,115,22,0.42)]"
            />

            {/* LED halo */}
            <motion.div
              style={{
                opacity: glowOpacity,
              }}
              className="pointer-events-none absolute left-[50%] top-[74.2%] z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/30 blur-3xl"
            />
          </motion.div>

          {/* Signal message */}
          <motion.div
            style={{
              opacity: messageOpacity,
              y: messageY,
            }}
            className="absolute bottom-[7%] text-center"
          >
            <p className="text-sm font-semibold tracking-[0.04em] text-[#F97316] sm:text-base">
              Neue Post ist angekommen.
            </p>
          </motion.div>

          {/* Scroll */}
          <motion.div
            style={{
              opacity: titleOpacity,
            }}
            className="absolute bottom-7 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-black/28">
              Scroll
            </p>

            <div className="mx-auto mt-3 h-8 w-px bg-gradient-to-b from-black/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
