'use client';

import Image from 'next/image';
import { ArrowDown, ArrowRight } from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { Logo } from '@/components/Logo';

export function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.02, 1.16],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['0%', '12%'],
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    [1, 0.9, 0.35],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -90],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.9],
    [1, 1, 0],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.28, 0.7, 0.18],
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[115vh] overflow-hidden bg-black"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          scale: imageScale,
          y: imageY,
          opacity: imageOpacity,
        }}
      >
        <Image
          src="/images/hero.png"
          alt="MailSignal solar-powered mailbox indicator"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/45" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[24%] h-[34rem] w-[34rem] rounded-full bg-[#ffc62a]/20 blur-[150px]"
        style={{ opacity: glowOpacity }}
      />

      <header className="absolute inset-x-0 top-0 z-40">
        <div className="section-shell flex h-24 items-center justify-between">
          <Logo />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-sm text-white/65 lg:flex"
          >
            <a className="transition hover:text-white" href="#product">
              Produkt
            </a>

            <a className="transition hover:text-white" href="#technology">
              Technologie
            </a>

            <a className="transition hover:text-white" href="#business">
              Business
            </a>

            <a className="transition hover:text-white" href="#about">
              Über uns
            </a>
          </nav>

          <a href="#contact" className="button-secondary hidden sm:inline-flex">
            Pilotprojekt
          </a>
        </div>
      </header>

      <motion.div
        className="section-shell relative z-20 flex min-h-screen items-end pb-20 pt-36 sm:pb-24 lg:items-center lg:pb-0"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div className="max-w-[920px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl"
          >
            <span className="signal-glow h-2 w-2 rounded-full bg-[#ffc62a]" />
            Entwickelt in Deutschland
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="display-xl text-balance max-w-[1050px]"
          >
            Post erkennen.
            <span className="block text-white/45">Ohne nachzusehen.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="copy-lg mt-8 max-w-[620px]"
          >
            MailSignal zeigt direkt am Briefkasten, ob neue Post angekommen
            ist. Solarbetrieben, wartungsarm und vollständig offline.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.32,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#contact" className="button-primary gap-2">
              Pilotprojekt anfragen
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href="#story" className="button-secondary">
              Produkt entdecken
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-white/45"
          >
            <span>Keine App</span>
            <span>Kein WLAN</span>
            <span>Keine Cloud</span>
            <span>Solarbetrieben</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#story"
        aria-label="Scroll to product story"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-6 z-30 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45 transition hover:text-white md:flex lg:right-12 xl:right-16"
      >
        Scroll
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/25 backdrop-blur-xl"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-56 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
