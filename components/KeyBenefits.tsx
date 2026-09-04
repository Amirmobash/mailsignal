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
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-[26rem] w-[26rem] rounded-full bg-[#F97316]/[0.035] blur-[170px]" />

        <div className="absolute bottom-[4%] right-[6%] h-[24rem] w-[24rem] rounded-full bg-[#FF9A4A]/[0.03] blur-[180px]" />
      </div>

      <div className="section-shell relative z-10">
        {/* Heading */}
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

        {/* Cards */}
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
                  border-[#FF9A4A]
                  bg-[linear-gradient(145deg,#FFD0AE_0%,#FFB97C_100%)]
                  p-7
                  shadow-[0_18px_50px_rgba(249,115,22,0.18)]
                  transition
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#F97316]
                  hover:bg-[linear-gradient(145deg,#FFC08D_0%,#FF9F52_100%)]
                  hover:shadow-[0_26px_70px_rgba(249,115,22,0.28)]
                  sm:p-8
                "
              >
                {/* Bright corner glow */}
                <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/45 blur-3xl transition duration-700 group-hover:bg-white/60" />

                {/* Soft lower glow */}
                <div className="pointer-events-none absolute -bottom-20 left-[18%] h-40 w-56 rounded-full bg-[#F97316]/15 blur-3xl" />

                {/* Bottom accent */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#F97316]/55 to-transparent" />

                {/* Top row */}
                <div className="relative flex items-start justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.24em] text-black/45">
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
                      border-[#F97316]/40
                      bg-white/90
                      shadow-[0_10px_30px_rgba(249,115,22,0.14)]
                      transition
                      duration-500
                      group-hover:border-[#F97316]
                      group-hover:bg-white
                      group-hover:shadow-[0_12px_36px_rgba(249,115,22,0.22)]
                    "
                  >
                    <Icon className="h-5 w-5 text-[#F97316] transition duration-500 group-hover:scale-110" />
                  </div>
                </div>

                {/* Text */}
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
