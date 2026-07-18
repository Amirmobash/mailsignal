'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

const statements = [
  {
    number: '01',
    eyebrow: 'Unabhängig',
    title: 'Keine Cloud.',
    text: 'MailSignal verarbeitet die Information direkt am Briefkasten.',
  },
  {
    number: '02',
    eyebrow: 'Einfach',
    title: 'Keine App.',
    text: 'Keine Installation, kein Benutzerkonto und keine Benachrichtigungen.',
  },
  {
    number: '03',
    eyebrow: 'Offline',
    title: 'Kein WLAN.',
    text: 'Das System funktioniert ohne Router und ohne Internetverbindung.',
  },
  {
    number: '04',
    eyebrow: 'Energie',
    title: 'Nur Tageslicht.',
    text: 'Die integrierte Solarfläche unterstützt einen wartungsarmen Betrieb.',
  },
];

export function TechnologyStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [0.92, 1, 1.1],
  );

  const imageRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [-2, 0, 2],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [35, -35],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.8, 1],
    [0.08, 0.22, 0.5, 0.32, 0.12],
  );

  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    reduceMotion ? [1, 1, 1] : [0.7, 1.2, 1.5],
  );

  const firstOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.2, 0.29],
    [1, 1, 1, 0],
  );

  const secondOpacity = useTransform(
    scrollYProgress,
    [0.21, 0.31, 0.43, 0.52],
    [0, 1, 1, 0],
  );

  const thirdOpacity = useTransform(
    scrollYProgress,
    [0.44, 0.54, 0.67, 0.76],
    [0, 1, 1, 0],
  );

  const fourthOpacity = useTransform(
    scrollYProgress,
    [0.68, 0.79, 1],
    [0, 1, 1],
  );

  const firstY = useTransform(
    scrollYProgress,
    [0, 0.29],
    reduceMotion ? [0, 0] : [0, -45],
  );

  const secondY = useTransform(
    scrollYProgress,
    [0.21, 0.36, 0.52],
    reduceMotion ? [0, 0, 0] : [45, 0, -45],
  );

  const thirdY = useTransform(
    scrollYProgress,
    [0.44, 0.59, 0.76],
    reduceMotion ? [0, 0, 0] : [45, 0, -45],
  );

  const fourthY = useTransform(
    scrollYProgress,
    [0.68, 0.84],
    reduceMotion ? [0, 0] : [45, 0],
  );

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%'],
  );

  const statementStyles = [
    { opacity: firstOpacity, y: firstY },
    { opacity: secondOpacity, y: secondY },
    { opacity: thirdOpacity, y: thirdY },
    { opacity: fourthOpacity, y: fourthY },
  ];

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="relative h-[400vh] bg-[#050505] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035),transparent_50%)]" />

          <motion.div
            aria-hidden="true"
            style={{
              opacity: glowOpacity,
              scale: glowScale,
            }}
            className="absolute left-[68%] top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] blur-[170px]"
          />

          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="section-shell relative z-20 h-full">
          <div className="grid h-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[420px]">
              {statements.map((statement, index) => (
                <motion.div
                  key={statement.number}
                  style={statementStyles[index]}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#ffc62a]">
                      {statement.number}
                    </span>

                    <span className="h-px w-10 bg-white/15" />

                    <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/35">
                      {statement.eyebrow}
                    </span>
                  </div>

                  <h2 className="mt-7 text-balance text-6xl font-semibold tracking-[-0.065em] sm:text-7xl lg:text-[7rem] lg:leading-[0.88]">
                    {statement.title}
                  </h2>

                  <p className="mt-7 max-w-xl text-base leading-7 text-white/42 sm:text-lg sm:leading-8">
                    {statement.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="relative hidden h-[72vh] lg:block">
              <motion.div
                style={{
                  scale: imageScale,
                  rotate: imageRotate,
                  y: imageY,
                }}
                className="absolute inset-0 m-auto h-[86%] w-[88%]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025] shadow-[0_50px_140px_rgba(0,0,0,0.55)]">
                  <Image
                    src="/images/competition.png"
                    alt="MailSignal Technologie"
                    fill
                    sizes="55vw"
                    className="object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />

                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 backdrop-blur-xl">
                    Offline by design
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                        Cloud
                      </p>

                      <p className="mt-2 text-sm font-medium">Keine</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                        Netzwerk
                      </p>

                      <p className="mt-2 text-sm font-medium">Offline</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                        Energie
                      </p>

                      <p className="mt-2 text-sm font-medium">Solar</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute right-6 top-1/2 z-30 hidden h-44 w-px -translate-y-1/2 overflow-hidden bg-white/10 md:block">
          <motion.div
            style={{ height: progressHeight }}
            className="absolute inset-x-0 top-0 bg-[#ffc62a]"
          />
        </div>

        <div className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/25">
          Technology · Scroll
        </div>
      </div>
    </section>
  );
}
