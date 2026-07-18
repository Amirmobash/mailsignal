'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

const applications = [
  {
    number: '01',
    title: 'Briefkästen',
    text: 'Für private Haushalte, Mehrfamilienhäuser und bestehende Anlagen.',
    image: '/images/hero.png',
  },
  {
    number: '02',
    title: 'Paketboxen',
    text: 'Das gleiche Prinzip kann auf weitere Zustell- und Aufbewahrungssysteme übertragen werden.',
    image: '/images/market.png',
  },
  {
    number: '03',
    title: 'Technische Gehäuse',
    text: 'Auch Wartungsklappen, Schränke und abgeschlossene Systeme können sichtbar signalisiert werden.',
    image: '/images/competition.png',
  },
];

export function BusinessShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [70, -70],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [0.96, 1, 1.06],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.08, 0.32, 0.12],
  );

  return (
    <section
      ref={sectionRef}
      id="business"
      className="relative overflow-hidden bg-[#f2f1ec] py-28 text-black sm:py-36 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute right-[-10%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-[#ffc62a] blur-[180px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.035),transparent_35%)]" />
      </div>

      <div className="section-shell relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40"
            >
              Business
            </motion.p>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{
                delay: 0.05,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[7rem] lg:leading-[0.9]"
            >
              Ein Prinzip.
              <span className="block text-black/30">Viele Anwendungen.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              delay: 0.12,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pb-3"
          >
            <p className="max-w-xl text-lg leading-8 text-black/50">
              MailSignal wurde für Briefkästen entwickelt. Die zugrunde
              liegende Technologie kann jedoch auf viele weitere geschlossene
              Systeme übertragen werden.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Privathaushalte',
                'Hausverwaltungen',
                'Hersteller',
                'Pilotpartner',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-white/45 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-black/45 backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[2.5rem] border border-black/10 bg-black lg:mt-28">
          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
            }}
            className="relative aspect-[16/8.5] min-h-[520px] w-full"
          >
            <Image
              src="/images/market.png"
              alt="MailSignal Anwendungen"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-black/20" />

            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/75 to-transparent" />

            <div className="absolute inset-0 flex items-end p-7 sm:p-10 lg:p-14">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffc62a]">
                  Skalierbare Technologie
                </p>

                <h3 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                  Sichtbarkeit für bestehende Infrastruktur.
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 lg:grid-cols-3">
          {applications.map(({ number, title, text, image }, index) => (
            <motion.article
              key={number}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 35,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-[#f2f1ec] p-5 sm:p-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-black/5">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-white/65 backdrop-blur-xl">
                  {number}
                </span>
              </div>

              <h3 className="mt-7 text-3xl font-semibold tracking-[-0.045em]">
                {title}
              </h3>

              <p className="mt-4 text-base leading-7 text-black/50">
                {text}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 grid gap-8 border-t border-black/10 pt-10 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/35">
              Installation
            </p>

            <p className="mt-3 text-xl font-semibold">Nachrüstbar</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/35">
              Infrastruktur
            </p>

            <p className="mt-3 text-xl font-semibold">Keine erforderlich</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/35">
              Einsatz
            </p>

            <p className="mt-3 text-xl font-semibold">Modular erweiterbar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
