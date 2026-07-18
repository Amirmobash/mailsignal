'use client';

import {
  Eye,
  Magnet,
  Sun,
  WifiOff,
} from 'lucide-react';
import {
  motion,
  useReducedMotion,
} from 'framer-motion';

const benefits = [
  {
    number: '01',
    icon: Eye,
    title: 'Direkt sichtbar',
    text: 'Neue Post sofort am Briefkasten erkennen.',
  },
  {
    number: '02',
    icon: Sun,
    title: 'Solarbetrieben',
    text: 'Energie aus Tageslicht. Kein externer Stromanschluss.',
  },
  {
    number: '03',
    icon: WifiOff,
    title: 'Vollständig offline',
    text: 'Keine App. Kein WLAN. Keine Cloud.',
  },
  {
    number: '04',
    icon: Magnet,
    title: 'Magnetisch montiert',
    text: 'Ohne Bohren. Ohne Werkzeug. Rückstandslos entfernbar.',
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.09,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function KeyBenefits() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#050504] py-28 text-white sm:py-36 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#050504] via-[#060605] to-transparent" />

        <div className="absolute left-[14%] top-[28%] h-[28rem] w-[28rem] rounded-full bg-[#ffc62a]/[0.055] blur-[180px]" />

        <div className="absolute right-[8%] bottom-[10%] h-[24rem] w-[24rem] rounded-full bg-white/[0.025] blur-[180px]" />
      </div>

      <div className="section-shell relative z-10">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.65,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ffc62a]">
            Die wichtigsten Vorteile
          </p>

          <h2 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[7rem] lg:leading-[0.9]">
            Einfach.
            <span className="block text-white/28">
              Unabhängig. Direkt.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
            Alles, was MailSignal besonders macht – auf das Wesentliche
            reduziert.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-4 sm:mt-24 lg:grid-cols-2 lg:gap-5">
          {benefits.map(
            (
              {
                number,
                icon: Icon,
                title,
                text,
              },
              index,
            ) => (
              <motion.article
                key={number}
                custom={index}
                initial={reduceMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.45,
                }}
                variants={cardVariants}
                className="group relative min-h-[240px] overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.055] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#ffc62a]/35 hover:bg-white/[0.075] sm:p-8"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/[0.025] blur-3xl transition duration-700 group-hover:bg-[#ffc62a]/[0.12]" />

                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.22em] text-white/24">
                    {number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.055] transition duration-500 group-hover:border-[#ffc62a]/40 group-hover:bg-[#ffc62a]/[0.1]">
                    <Icon className="h-5 w-5 text-[#ffc62a] transition duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <div className="mt-14">
                  <h3 className="max-w-md text-3xl font-semibold tracking-[-0.045em] sm:text-[2.15rem]">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/52 sm:text-base sm:leading-7">
                    {text}
                  </p>
                </div>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
