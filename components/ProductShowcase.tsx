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
    offset: ['start start', 'end end'],
  });

  /*
   * Image movement
   */

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.025, 0.985],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [12, -12],
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.9, 1],
    [0.82, 1, 1, 0.92],
  );

  /*
   * Text reveal
   *
   * At the beginning the complete text is invisible.
   * It becomes visible gradually as the user scrolls.
   */

  const eyebrowOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.2, 0.34],
    [0, 0.5, 1],
  );

  const eyebrowY = useTransform(
    scrollYProgress,
    [0.08, 0.34],
    reduceMotion ? [0, 0] : [22, 0],
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0.14, 0.34, 0.54],
    [0, 0.42, 1],
  );

  const titleY = useTransform(
    scrollYProgress,
    [0.14, 0.54],
    reduceMotion ? [0, 0] : [54, 0],
  );

  const copyOpacity = useTransform(
    scrollYProgress,
    [0.34, 0.52, 0.7],
    [0, 0.48, 1],
  );

  const copyY = useTransform(
    scrollYProgress,
    [0.34, 0.7],
    reduceMotion ? [0, 0] : [28, 0],
  );

  /*
   * Background glow
   */

  const ambientGlowOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0.04, 0.2, 0.15, 0.07],
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[145vh] bg-[#050504] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#030303] via-[#040403] to-transparent" />

        <motion.div
          style={{ opacity: ambientGlowOpacity }}
          className="pointer-events-none absolute left-[30%] top-[54%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/12 blur-[180px]"
        />

        <div className="section-shell relative z-10 flex h-full items-center py-16 sm:py-20">
          <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
            <motion.div
              style={{
                scale: imageScale,
                y: imageY,
                opacity: imageOpacity,
              }}
              className="relative h-[58vh] min-h-[480px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-black lg:h-[76vh]"
            >
              <Image
                src="/images/product-mailbox-night.png"
                alt="MailSignal an einem modernen Briefkasten bei Nacht"
                fill
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/18" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Pulsing LED point */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.6, 1, 0.6],
                        scale: [0.9, 1.22, 0.9],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="pointer-events-none absolute left-[49%] top-[55.4%] z-20 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe04a] shadow-[0_0_8px_3px_rgba(255,224,74,1),0_0_22px_9px_rgba(255,198,42,0.78),0_0_48px_19px_rgba(255,170,0,0.38)]"
              />

              {/* Soft LED halo */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.14, 0.52, 0.14],
                        scale: [0.8, 1.3, 0.8],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="pointer-events-none absolute left-[49%] top-[55.4%] z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/38 blur-2xl"
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
      </div>
    </section>
  );
}
