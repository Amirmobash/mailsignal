'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
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
    offset: ['start start', 'end end'],
  });

  const productScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 1],
    reduceMotion ? [1, 1, 1, 1] : [0.82, 0.92, 1.04, 1.16],
  );

  const productY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    reduceMotion ? [0, 0, 0] : [40, 0, -30],
  );

  const productOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.9, 1],
    [0.25, 1, 1, 0.4],
  );

  const backgroundGlowOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.55, 0.8, 1],
    [0.04, 0.1, 0.28, 0.5, 0.2],
  );

  const backgroundGlowScale = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    reduceMotion ? [1, 1, 1] : [0.55, 1.2, 1.55],
  );

  const ledOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.42, 1],
    [0.12, 0.12, 1, 1],
  );

  const ledScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.46, 0.62, 1],
    reduceMotion ? [1, 1, 1, 1, 1] : [0.7, 0.7, 1.15, 1, 1],
  );

  const ledGlowOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.46, 0.8, 1],
    [0, 0, 0.9, 0.65, 0.4],
  );

  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.28],
    [1, 1, 0],
  );

  const introY = useTransform(
    scrollYProgress,
    [0, 0.28],
    reduceMotion ? [0, 0] : [0, -45],
  );

  const detectionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.32, 0.46, 0.56],
    [0, 1, 1, 0],
  );

  const detectionY = useTransform(
    scrollYProgress,
    [0.2, 0.36, 0.56],
    reduceMotion ? [0, 0, 0] : [35, 0, -35],
  );

  const signalOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.57, 0.73, 0.83],
    [0, 1, 1, 0],
  );

  const signalY = useTransform(
    scrollYProgress,
    [0.45, 0.62, 0.83],
    reduceMotion ? [0, 0, 0] : [35, 0, -35],
  );

  const finalOpacity = useTransform(
    scrollYProgress,
    [0.72, 0.84, 1],
    [0, 1, 1],
  );

  const finalY = useTransform(
    scrollYProgress,
    [0.72, 0.88],
    reduceMotion ? [0, 0] : [35, 0],
  );

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%'],
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[360vh] bg-[#050505]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="section-shell flex h-24 items-center justify-between">
            <Logo />

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-8 text-sm text-white/55 lg:flex"
            >
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
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/75 transition duration-300 hover:border-white/35 hover:text-white"
            >
              Kontakt
            </a>
          </div>
        </header>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_48%)]" />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] blur-[170px]"
            style={{
              opacity: backgroundGlowOpacity,
              scale: backgroundGlowScale,
            }}
          />

          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/70 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            style={{
              scale: productScale,
              y: productY,
              opacity: productOpacity,
            }}
            className="relative h-[54vh] w-[88vw] max-w-[920px] sm:h-[62vh] lg:h-[68vh]"
          >
            <Image
              src="/images/product.png"
              alt="MailSignal am Briefkasten"
              fill
              priority
              sizes="(max-width: 768px) 92vw, 920px"
              className="object-contain"
            />

            <motion.div
              aria-hidden="true"
              style={{
                opacity: ledGlowOpacity,
                scale: ledScale,
              }}
              className="absolute right-[18%] top-[54%] h-28 w-28 rounded-full bg-[#ffc62a] blur-[48px] sm:right-[21%] sm:top-[53%] sm:h-36 sm:w-36 lg:right-[22%]"
            />

            <motion.div
              aria-hidden="true"
              style={{
                opacity: ledOpacity,
                scale: ledScale,
              }}
              className="absolute right-[24%] top-[59%] h-3.5 w-3.5 rounded-full border border-white/30 bg-[#ffc62a] shadow-[0_0_16px_rgba(255,198,42,0.95),0_0_45px_rgba(255,198,42,0.75)] sm:right-[27%] sm:top-[58%] sm:h-4 sm:w-4 lg:right-[28%]"
            />
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20">
          <motion.div
            style={{
              opacity: introOpacity,
              y: introY,
            }}
            className="absolute inset-x-0 top-[16%] px-6 text-center sm:top-[15%]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              MailSignal
            </p>

            <h1 className="mx-auto mt-5 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-[7rem] lg:leading-[0.9]">
              Post erkennen.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              Ohne App. Ohne WLAN. Ohne Cloud.
            </p>
          </motion.div>

          <motion.div
            style={{
              opacity: detectionOpacity,
              y: detectionY,
            }}
            className="absolute inset-x-0 top-[16%] px-6 text-center"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              01 — Erkennung
            </p>

            <h2 className="mx-auto mt-5 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-[6.5rem] lg:leading-[0.92]">
              Der Einwurf
              <span className="block text-white/35">setzt alles in Bewegung.</span>
            </h2>
          </motion.div>

          <motion.div
            style={{
              opacity: signalOpacity,
              y: signalY,
            }}
            className="absolute inset-x-0 top-[16%] px-6 text-center"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#ffc62a]">
              02 — Das Signal
            </p>

            <h2 className="mx-auto mt-5 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-[6.5rem] lg:leading-[0.92]">
              Post ist da.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              Ein sichtbares Lichtsignal direkt am Briefkasten.
            </p>
          </motion.div>

          <motion.div
            style={{
              opacity: finalOpacity,
              y: finalY,
            }}
            className="absolute inset-x-0 top-[15%] px-6 text-center"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              03 — Sichtbar
            </p>

            <h2 className="mx-auto mt-5 max-w-6xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-[6.8rem] lg:leading-[0.9]">
              Ein Blick genügt.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              Das Signal bleibt aktiv, bis der Briefkasten kontrolliert wird.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/35"
        >
          Scroll

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>

        <div className="absolute right-5 top-1/2 z-30 hidden h-40 w-px -translate-y-1/2 overflow-hidden bg-white/10 md:block">
          <motion.div
            style={{ height: progressHeight }}
            className="absolute inset-x-0 top-0 bg-[#ffc62a]"
          />
        </div>

        <div className="absolute bottom-6 left-6 z-30 hidden text-[10px] uppercase tracking-[0.22em] text-white/25 md:block">
          Scroll to activate the signal
        </div>
      </div>
    </section>
  );
}
