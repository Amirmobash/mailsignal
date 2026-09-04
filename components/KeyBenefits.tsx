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
    title: 'Solarbetrieben & wetterfest',
    text: 'Energie aus Tageslicht. Für draußen entwickelt und gegen Regen geschützt.',
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
    y: 24,
    scale: 0.985,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      delay: index * 0.08,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function KeyBenefits() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-white py-16 text-[#171717] sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-[26rem] w-[26rem] rounded-full bg-[#F97316]/[0.025] blur-[170px]" />

        <div className="absolute bottom-[4%] right-[6%] h-[24rem] w-[24rem] rounded-full bg-[#F97316]/[0.02] blur-[180px]" />
      </div>

      <div className="section-shell relative z-10">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl"
        >
          <p className="ml-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#F97316]">
            Die wichtigsten Vorteile
          </p>

          <h2 className="mt-5 text-balance text-5xl font-semibold tracking-[-0.06em] text-[#171717] sm:text-7xl lg:text-[6.5rem] lg:leading-[0.92]">
            Einfach gedacht.

            <span className="block text-[#F97316]">
              Für draußen gemacht.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/55">
            Die wichtigsten Vorteile auf einen Blick.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-2">
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
                initial={
                  reduceMotion
                    ? false
                    : 'hidden'
                }
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.45,
                }}
                variants={cardVariants}
                className="
                  group
                  relative
                  min-h-[190px]
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-[#F3A56F]
                  bg-[#FFD8BF]
                  p-7
                  shadow-[0_18px_45px_rgba(249,115,22,0.10)]
                  transition
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#F97316]
                  hover:bg-[#FFCBA8]
                  hover:shadow-[0_24px_60px_rgba(249,115,22,0.18)]
                  sm:p-8
                "
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/25 blur-3xl" />

                <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#F97316]/50 to-transparent" />

                <div className="relative flex items-start justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.24em] text-black/38">
                    {number}
                  </span>

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#F97316]/35
                      bg-white/75
                      shadow-[0_8px_24px_rgba(249,115,22,0.10)]
                      transition
                      duration-500
                      group-hover:border-[#F97316]
                      group-hover:bg-white
                    "
                  >
                    <Icon className="h-5 w-5 text-[#F97316] transition duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <div className="relative mt-9">
                  <h3 className="max-w-md text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-[1.9rem]">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-lg text-[0.96rem] leading-6 text-black/65">
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
