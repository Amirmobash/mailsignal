'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { BatteryCharging, Eye, Sun, Wrench } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Sun,
    title: 'Solarbetrieben',
    text: 'Die integrierte Solarfläche nutzt vorhandenes Tageslicht.',
  },
  {
    icon: Eye,
    title: 'Direkt sichtbar',
    text: 'Der Status wird unmittelbar am Briefkasten angezeigt.',
  },
  {
    icon: Wrench,
    title: 'Werkzeuglos montiert',
    text: 'MailSignal wird an vorhandenen Briefkästen nachgerüstet.',
  },
  {
    icon: BatteryCharging,
    title: 'Energieeffizient',
    text: 'Das System ist für einen sparsamen und wartungsarmen Betrieb konzipiert.',
  },
];

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const productScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    reduceMotion ? [1, 1, 1] : [0.88, 1, 1.08],
  );

  const productY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [90, 0, -70],
  );

  const productRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [-2.5, 0, 2.5],
  );

  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [0.7, 1.1, 0.85],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.12, 0.48, 0.2],
  );

  return (
    <section
      ref={sectionRef}
      id="product-showcase"
      className="relative overflow-hidden border-y border-white/10 bg-[#f1f0eb] py-28 text-black sm:py-36 lg:py-44"
    >
      <div className="section-shell">
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="relative z-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Das Produkt
            </p>

            <h2 className="display-lg mt-6 max-w-3xl text-balance">
              Technik, die sich zurücknimmt.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/55">
              MailSignal verwandelt den Briefkasten nicht in ein vernetztes
              Gerät. Es ergänzt ihn lediglich um die Information, die bisher
              gefehlt hat.
            </p>

            <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-black/10 bg-black/10 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="min-h-[220px] bg-[#f1f0eb] p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.035]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-9 font-semibold tracking-[-0.02em]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    {text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="relative min-h-[620px] lg:min-h-[760px]">
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 m-auto h-[70%] w-[70%] rounded-full bg-[#ffc62a] blur-[150px]"
              style={{
                opacity: glowOpacity,
                scale: glowScale,
              }}
            />

            <motion.div
              style={{
                scale: productScale,
                y: productY,
                rotate: productRotate,
              }}
              className="absolute inset-0 m-auto h-[88%] w-full max-w-[820px] overflow-hidden rounded-[2.5rem] border border-black/10 bg-black shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
            >
              <Image
                src="/images/product.png"
                alt="MailSignal product showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 backdrop-blur-xl">
                MailSignal Prototype
              </div>

              <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/55 p-4 text-white backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Energie
                  </p>
                  <p className="mt-2 text-sm font-medium">Solar</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/55 p-4 text-white backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Verbindung
                  </p>
                  <p className="mt-2 text-sm font-medium">Keine</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/55 p-4 text-white backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Anzeige
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="signal-glow h-2.5 w-2.5 rounded-full bg-[#ffc62a]" />
                    <p className="text-sm font-medium">LED-Signal</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-0 top-[13%] hidden rounded-full border border-black/10 bg-white/70 px-5 py-3 text-xs font-medium text-black/60 shadow-xl backdrop-blur-xl xl:block"
            >
              Solarfläche
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-[18%] left-0 hidden rounded-full border border-black/10 bg-white/70 px-5 py-3 text-xs font-medium text-black/60 shadow-xl backdrop-blur-xl xl:block"
            >
              Sichtbare Status-LED
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
