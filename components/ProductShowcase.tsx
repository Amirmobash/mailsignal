'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

import productMailboxLight from '@/assets/images/product-mailbox-light.png';

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
    [0.1, 0.26, 0.5],
    [0, 1, 1],
  );

  const titleY = useTransform(
    scrollYProgress,
    [0.1, 0.34],
    reduceMotion ? [0, 0] : [54, 0],
  );

  const copyOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.34, 0.58],
    [0, 0.6, 1],
  );

  const copyY = useTransform(
    scrollYProgress,
    [0.18, 0.48],
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
      id="produkt"
      className="relative -mt-[24vh] h-[115vh] scroll-mt-24 bg-white text-[#171717]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* Smooth transition from previous white section */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white to-transparent" />

        {/* Very subtle orange atmosphere */}
        <motion.div
          style={{
            opacity: ambientGlowOpacity,
          }}
          className="pointer-events-none absolute left-[30%] top-[54%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/10 blur-[180px]"
        />

        <div className="section-shell relative z-10 flex h-full items-center py-16 sm:py-20">
          <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
            {/* Product image */}
            <motion.div
              style={{
                scale: imageScale,
                y: imageY,
                opacity: imageOpacity,
              }}
              className="relative flex h-[58vh] min-h-[480px] items-center justify-center lg:h-[76vh]"
            >
              <div className="relative aspect-[1234/1280] h-full max-h-[76vh] max-w-full">
                <Image
                  src={productMailboxLight}
                  alt="MailSignal an einem dreidimensionalen Briefkasten"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 52vw"
                  className="select-none object-contain"
                />

                {/* Pulsing LED point */}
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [0.35, 1, 0.35],
                          scale: [0.82, 1.18, 0.82],
                        }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute left-[54.2%] top-[47.6%] z-20 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] shadow-[0_0_8px_3px_rgba(249,115,22,1),0_0_22px_9px_rgba(249,115,22,0.65),0_0_48px_18px_rgba(249,115,22,0.28)]"
                />

                {/* Soft LED halo */}
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [0.08, 0.38, 0.08],
                          scale: [0.78, 1.3, 0.78],
                        }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute left-[54%] top-[48.4%] z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/30 blur-2xl"
                />
              </div>
            </motion.div>

            {/* Text */}
            <div className="max-w-2xl">
              <motion.p
                style={{
                  opacity: eyebrowOpacity,
                  y: eyebrowY,
                }}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F97316]"
              >
                Das Produkt
              </motion.p>

              <motion.h2
                style={{
                  opacity: titleOpacity,
                  y: titleY,
                }}
                className="mt-6 text-balance text-5xl font-semibold tracking-[-0.065em] text-[#171717] sm:text-7xl lg:text-[6.8rem] lg:leading-[0.9]"
              >
                Weniger Wege.

                <span className="block text-[#F97316]">
                  Mehr Gewissheit.
                </span>
              </motion.h2>

              <motion.p
                style={{
                  opacity: copyOpacity,
                  y: copyY,
                }}
                className="mt-8 max-w-xl text-lg leading-8 text-black/50"
              >
                MailSignal zeigt direkt am Briefkasten, ob neue Post angekommen
                ist. Ein Blick genügt.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
