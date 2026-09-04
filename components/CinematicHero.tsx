'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

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
    [0, reduceMotion ? 0 : -45],
  );

  const deviceScale = useTransform(
    scrollYProgress,
    [0, 0.72],
    [1, reduceMotion ? 1 : 0.94],
  );

  const deviceY = useTransform(
    scrollYProgress,
    [0, 0.72],
    [0, reduceMotion ? 0 : -10],
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
    [12, 0],
  );

  return (
    <section
      ref={sectionRef}
      id="cinematic"
      className="relative h-[135vh] bg-white text-[#171717]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* Soft orange atmosphere */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(249,115,22,0.035),transparent_36%)]" />

        <motion.div
          style={{
            opacity: glowOpacity,
          }}
          className="pointer-events-none absolute left-1/2 top-[62%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/[0.06] blur-[160px]"
        />

        {/* Title */}
        <motion.div
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
          className="absolute left-1/2 top-[8%] z-20 w-full -translate-x-1/2 px-6 text-center"
        >
          <h2 className="text-[clamp(2.6rem,6.4vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#171717]">
            Nie wieder umsonst
          </h2>

          <p className="mt-2 text-[clamp(2.6rem,6vw,6rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#F97316]">
            zum Briefkasten.
          </p>
        </motion.div>

        {/* Device + message */}
        <motion.div
          style={{
            scale: deviceScale,
            y: deviceY,
          }}
          className="absolute left-1/2 top-[36%] z-10 w-[min(78vw,48vh,560px)] -translate-x-1/2"
        >
          <div className="relative">
            <Image
              src="/images/hero-device-off.png"
              alt="MailSignal Gerät mit Solarpanel und LED-Anzeige"
              width={1536}
              height={1536}
              priority
              sizes="(max-width: 768px) 78vw, 560px"
              className="h-auto w-full select-none object-contain"
            />

            {/* LED point */}
            <motion.div
              style={{
                opacity: ledOpacity,
              }}
              className="pointer-events-none absolute left-[50%] top-[74.5%] z-20 h-[2.2%] w-[2.2%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] shadow-[0_0_10px_3px_rgba(249,115,22,0.95),0_0_34px_12px_rgba(249,115,22,0.42)]"
            />

            {/* LED halo */}
            <motion.div
              style={{
                opacity: glowOpacity,
              }}
              className="pointer-events-none absolute left-[50%] top-[74.5%] z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/25 blur-3xl"
            />
          </div>

          {/* Message directly below device */}
          <motion.div
            style={{
              opacity: messageOpacity,
              y: messageY,
            }}
            className="absolute left-1/2 top-[calc(100%+10px)] w-max -translate-x-1/2 text-center"
          >
            <p className="text-sm font-semibold tracking-[0.04em] text-[#F97316] sm:text-base">
              Neue Post ist angekommen.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{
            opacity: titleOpacity,
          }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-[9px] uppercase tracking-[0.32em] text-black/25">
            Scroll
          </p>

          <div className="mx-auto mt-2 h-6 w-px bg-gradient-to-b from-black/25 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
