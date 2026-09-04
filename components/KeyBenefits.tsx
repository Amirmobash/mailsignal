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
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white to-transparent" />

        <div className="absolute left-[12%] top-[26%] h-[24rem] w-[24rem] rounded-full bg-[#F97316]/[0.055] blur-[170px]" />

        <div className="absolute bottom-[8%] right-[6%] h-[22rem] w-[22rem] rounded-full bg-[#F97316]/[0.035] blur-[180px]" />
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

            <span className="block text-black/24">
              Für draußen gemacht.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/46">
            Die wichtigsten Vorteile auf einen Blick.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-2">
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
                className="group relative min-h-[180px] overflow-hidden rounded-[1.6rem] border border-[#F97316]/15 bg-[linear-gradient(145deg,rgba(249,115,22,0.055),rgba(255,255,255,0.96))] p-6 shadow-[0_18px_50px_rgba(20,20,20,0.045)] transition duration-500 hover:-translate-y-1 hover:border-[#F97316]/35 hover:bg-[linear-gradient(145deg,rgba(249,115,22,0.09),rgba(255,255,255,1))] hover:shadow-[0_22px_60px_rgba(249,115,22,0.08)] sm:p-7"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#F97316]/[0.06] blur-3xl transition duration-700 group-hover:bg-[#F97316]/[0.12]" />

                <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#F97316]/18 to-transparent" />

                <div className="relative flex items-start justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-black/30">
                    {number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F97316]/20 bg-[#F97316]/[0.07] shadow-[0_0_24px_rgba(249,115,22,0.05)] transition duration-500 group-hover:border-[#F97316]/45 group-hover:bg-[#F97316]/[0.11] group-hover:shadow-[0_0_34px_rgba(249,115,22,0.12)]">
                    <Icon className="h-[18px] w-[18px] text-[#F97316] transition duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <div className="relative mt-8">
                  <h3 className="max-w-md text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-[1.9rem]">
                    {title}
                  </h3>

                  <p className="mt-2.5 max-w-md text-sm leading-6 text-black/52 sm:text-[0.95rem] sm:leading-6">
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
