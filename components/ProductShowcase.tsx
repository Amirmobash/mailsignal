'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [1.04, 1, 0.985],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [24, -18],
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.88, 1],
    [0.55, 1, 1, 0.78],
  );

  const eyebrowOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.2, 0.42],
    [0, 1, 1],
  );

  const eyebrowY = useTransform(
    scrollYProgress,
    [0.08, 0.24],
    reduceMotion ? [0, 0] : [18, 0],
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0.14, 0.32, 0.62],
    [0, 1, 1],
  );

  const titleY = useTransform(
    scrollYProgress,
    [0.14, 0.34],
    reduceMotion ? [0, 0] : [42, 0],
  );

  const copyOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.44, 0.7],
    [0, 1, 1],
  );

  const copyY = useTransform(
    scrollYProgress,
    [0.28, 0.46],
    reduceMotion ? [0, 0] : [24, 0],
  );

  const ambientGlow = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0.04, 0.18, 0.14, 0.06],
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[115vh] overflow-hidden bg-[#050504] text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#030303] via-[#040403] to-transparent" />

      <motion.div
        style={{ opacity: ambientGlow }}
        className="pointer-events-none absolute left-[31%] top-[52%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/12 blur-[180px]"
      />

      <div className="section-shell relative z-10 flex min-h-[115vh] items-center py-20 sm:py-28 lg:py-32">
        <div className="grid w-full gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <motion.div
            style={{
              scale: imageScale,
              y: imageY,
              opacity: imageOpacity,
            }}
            className="relative h-[60vh] min-h-[520px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-black lg:h-[76vh]"
          >
            <Image
              src="/images/product-mailbox-night.png"
              alt="MailSignal an einem modernen Briefkasten bei Nacht"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/20" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/32 to-transparent" />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.35, 1, 0.35],
                      scale: [0.9, 1.18, 0.9],
                    }
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-[49.7%] top-[57.6%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] shadow-[0_0_12px_4px_rgba(255,198,42,0.95),0_0_34px_14px_rgba(255,198,42,0.42)]"
            />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.08, 0.26, 0.08],
                      scale: [0.8, 1.2, 0.8],
                    }
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-[49.7%] top-[57.6%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/25 blur-3xl"
            />
          </motion.div>

          <div className="max-w-2xl">
            <motion.p
              style={{
                opacity: eyebrowOpacity,
                y: eyebrowY,
              }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ffc62a]"
            >
              Das Produkt
            </motion.p>

            <motion.h2
              style={{
                opacity: titleOpacity,
                y: titleY,
              }}
              className="mt-6 text-balance text-5xl font-semibold tracking-[-0.065em] sm:text-7xl lg:text-[6.8rem] lg:leading-[0.9]"
            >
              Weniger Wege.
              <span className="block text-[#ffc62a]">
                Mehr Gewissheit.
              </span>
            </motion.h2>

            <motion.p
              style={{
                opacity: copyOpacity,
                y: copyY,
              }}
              className="mt-8 max-w-xl text-lg leading-8 text-white/48"
            >
              MailSignal zeigt direkt am Briefkasten, ob neue Post angekommen
              ist. Ohne App, ohne WLAN und ohne unnötigen Kontrollgang.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
