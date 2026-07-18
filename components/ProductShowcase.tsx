'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

const productDetails = [
  {
    number: '01',
    title: 'Direkt sichtbar.',
    text: 'MailSignal zeigt unmittelbar am Briefkasten, ob neue Post angekommen ist.',
  },
  {
    number: '02',
    title: 'Vollständig offline.',
    text: 'Keine App, kein WLAN, kein Benutzerkonto und keine Cloud-Verbindung.',
  },
  {
    number: '03',
    title: 'Für bestehende Briefkästen.',
    text: 'Das System wird einfach nachgerüstet und benötigt keine neue Infrastruktur.',
  },
];

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    reduceMotion ? [1, 1, 1] : [0.88, 1, 1.08],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [90, 0, -70],
  );

  const imageRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [-2, 0, 2],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.08, 0.35, 0.16],
  );

  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [0.7, 1.1, 1.35],
  );

  const labelOpacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.85, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={sectionRef}
      id="product"
      className="relative overflow-hidden bg-[#f3f2ed] text-black"
    >
      <div className="section-shell py-28 sm:py-36 lg:py-44">
        <div className="max-w-6xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40"
          >
            Das Produkt
          </motion.p>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{
              delay: 0.06,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[7rem] lg:leading-[0.9]"
          >
            Weniger Technik.
            <span className="block text-black/30">Mehr Klarheit.</span>
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              delay: 0.14,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-black/50"
          >
            MailSignal ergänzt den Briefkasten um genau eine Information:
            Ist neue Post angekommen oder nicht?
          </motion.p>
        </div>

        <div className="relative mt-20 grid gap-16 lg:mt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="relative min-h-[580px] sm:min-h-[720px] lg:sticky lg:top-20 lg:min-h-[calc(100vh-10rem)]">
            <motion.div
              aria-hidden="true"
              style={{
                opacity: glowOpacity,
                scale: glowScale,
              }}
              className="absolute inset-0 m-auto h-[65%] w-[65%] rounded-full bg-[#ffc62a] blur-[160px]"
            />

            <motion.div
              style={{
                scale: imageScale,
                y: imageY,
                rotate: imageRotate,
              }}
              className="absolute inset-0 m-auto h-[88%] w-full max-w-[860px]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#d9d8d2] shadow-[0_50px_120px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/product.png"
                  alt="MailSignal am Briefkasten"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />

                <motion.div
                  style={{ opacity: labelOpacity }}
                  className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl"
                >
                  MailSignal Prototype
                </motion.div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/75 backdrop-blur-xl">
                    Solarbetrieben
                  </div>

                  <div className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/75 backdrop-blur-xl">
                    Offline
                  </div>

                  <div className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/75 backdrop-blur-xl">
                    Werkzeuglos
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:pt-28">
            {productDetails.map(({ number, title, text }, index) => (
              <motion.article
                key={number}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 45,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-t border-black/10 py-12 sm:py-14 lg:min-h-[340px]"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-semibold tracking-[0.2em] text-black/30">
                    {number}
                  </span>

                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ffc62a] shadow-[0_0_20px_rgba(255,198,42,0.8)]" />
                </div>

                <h3 className="mt-14 max-w-lg text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                  {title}
                </h3>

                <p className="mt-6 max-w-lg text-base leading-7 text-black/50 sm:text-lg sm:leading-8">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="section-shell flex flex-col gap-8 py-10 text-xs uppercase tracking-[0.18em] text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <span>Keine App</span>
          <span>Kein WLAN</span>
          <span>Keine Cloud</span>
          <span>Solarbetrieben</span>
        </div>
      </div>
    </section>
  );
}
