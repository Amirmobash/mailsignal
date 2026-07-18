'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Logo } from '@/components/Logo';

export function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.24, 0.48],
    [1, 1, 0],
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.48],
    [0, reduceMotion ? 0 : -60],
  );

  const deviceScale = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1, reduceMotion ? 1 : 0.88],
  );

  const deviceY = useTransform(
    scrollYProgress,
    [0, 0.65],
    [0, reduceMotion ? 0 : -25],
  );

  const ledOpacity = useTransform(
  scrollYProgress,
  [0.3, 0.52, 0.72],
  [0, 0.25, 1],
 );

  const glowOpacity = useTransform(
  scrollYProgress,
  [0.34, 0.56, 0.78],
  [0, 0.16, 0.58],
 );

  const messageOpacity = useTransform(
  scrollYProgress,
  [0.48, 0.66, 0.84],
  [0, 1, 1],
);

const messageY = useTransform(
  scrollYProgress,
  [0.48, 0.66],
  [20, 0],
);

  return (
    <section
      ref={sectionRef}
      id="product"
      className="relative h-[260vh] bg-[#030303] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <header className="absolute inset-x-0 top-0 z-30">
          <div className="section-shell flex h-24 items-center justify-between">
            <Logo />

            <nav className="hidden items-center gap-9 text-sm text-white/55 md:flex">
              <a
                href="#product"
                className="transition duration-300 hover:text-white"
              >
                Produkt
              </a>

              <a
                href="#technology"
                className="transition duration-300 hover:text-white"
              >
                Technologie
              </a>

              <a
                href="#business"
                className="transition duration-300 hover:text-white"
              >
                Business
              </a>
            </nav>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/75 transition duration-300 hover:border-white/30 hover:text-white"
            >
              Kontakt
            </a>
          </div>
        </header>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(255,255,255,0.035),transparent_32%)]" />

        <motion.div
          style={{ opacity: glowOpacity }}
          className="pointer-events-none absolute left-1/2 top-[63%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/20 blur-[160px]"
        />

        <div className="relative mx-auto flex h-full max-w-[1500px] flex-col items-center justify-center px-6 pt-24">
          <motion.div
            style={{
              opacity: titleOpacity,
              y: titleY,
            }}
            className="absolute top-[13%] z-20 text-center sm:top-[12%]"
          >
            <p className="text-[clamp(3.3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
               Post erkennen.
            </p>

            <p className="mt-3 text-[clamp(3rem,7.4vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white/32">
               Ohne App. Ohne Umweg.
            </p>
          </motion.div>

          <motion.div
            style={{
              scale: deviceScale,
              y: deviceY,
            }}
            className="relative mt-64 w-[min(78vw,620px)] sm:mt-72"
          >
            <Image
              src="/images/hero-device-off.png"
              alt="MailSignal Gerät"
              width={1536}
              height={1536}
              priority
              sizes="(max-width: 768px) 88vw, 650px"
              className="h-auto w-full select-none object-contain"
            />

            <motion.div
               style={{ opacity: ledOpacity }}
               className="pointer-events-none absolute left-[50%] top-[66.4%] h-[2.1%] w-[2.1%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] shadow-[0_0_10px_3px_rgba(255,198,42,0.95),0_0_35px_12px_rgba(255,198,42,0.45)]"
           />

            <motion.div
              <motion.div
               style={{ opacity: glowOpacity }}
               className="pointer-events-none absolute left-[50%] top-[66.4%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/35 blur-3xl"
          />
          </motion.div>

          <motion.div
            style={{
              opacity: messageOpacity,
              y: messageY,
            }}
            className="absolute bottom-[10%] text-center"
          >
            <p className="text-sm font-medium tracking-[0.04em] text-[#ffc62a] sm:text-base">
              Neue Post ist angekommen.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: titleOpacity }}
            className="absolute bottom-7 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/28">
              Scroll
            </p>

            <div className="mx-auto mt-3 h-8 w-px bg-gradient-to-b from-white/35 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
