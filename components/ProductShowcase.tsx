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
    [0, 0.12, 0.88, 1],
    [0.72, 1, 1, 0.86],
  );

  const eyebrowOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.08, 0.16],
    [0, 0.55, 1],
  );

  const eyebrowY = useTransform(
    scrollYProgress,
    [0.02, 0.14],
    reduceMotion ? [0, 0] : [16, 0],
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.14, 0.26],
    [0, 0.6, 1],
  );

  const titleY = useTransform(
    scrollYProgress,
    [0.05, 0.22],
    reduceMotion ? [0, 0] : [34, 0],
  );

  const copyOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.22, 0.34],
    [0, 0.6, 1],
  );

  const copyY = useTransform(
    scrollYProgress,
    [0.12, 0.3],
    reduceMotion ? [0, 0] : [20, 0],
  );

  const ambientGlow = useTransform(
    scrollYProgress,
    [0, 0.35, 0.8, 1],
    [0.04, 0.2, 0.14, 0.06],
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] overflow-hidden bg-[#050504] text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#030303] via-[#040403] to-transparent" />

      <motion.div
        style={{ opacity: ambientGlow }}
        className="pointer-events-none absolute left-[31%] top-[52%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/12 blur-[180px]"
      />

      <div className="section-shell relative z-10 flex min-h-[110vh] items-center py-20 sm:py-28 lg:py-32">
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
                      opacity: [0.55, 1, 0.55],
                      scale: [0.92, 1.18, 0.92],
                    }
              }
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-[48.9%] top-[51.7%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd32a] shadow-[0_0_10px_3px_rgba(255,211,42,1),0_0_28px_11px_rgba(255,198,42,0.72),0_0_54px_22px_rgba(255,170,0,0.32)]"
            />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.14, 0.48, 0.14],
                      scale: [0.82, 1.3, 0.82],
                    }
              }
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-[48.9%] top-[51.7%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/34 blur-2xl"
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
