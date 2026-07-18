'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

const scenes = [
  {
    number: '01',
    eyebrow: 'Der Alltag',
    title: 'Ist Post angekommen?',
    text: 'Eine kleine Unsicherheit, die sich jeden Tag wiederholt.',
    image: '/images/problem.png',
  },
  {
    number: '02',
    eyebrow: 'Der Mechanismus',
    title: 'Bewegung wird erkannt.',
    text: 'Die Einwurfklappe aktiviert das System direkt am Briefkasten.',
    image: '/images/prototype.png',
  },
  {
    number: '03',
    eyebrow: 'Das Signal',
    title: 'Licht schafft Klarheit.',
    text: 'Ein sichtbares Signal zeigt an, dass neue Post angekommen ist.',
    image: '/images/product.png',
  },
  {
    number: '04',
    eyebrow: 'Die Anwendung',
    title: 'Ein Blick genügt.',
    text: 'Ohne App, ohne WLAN und ohne zusätzliche Infrastruktur.',
    image: '/images/hero.png',
  },
];

export function VisualStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

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

  const firstScale = useTransform(
    scrollYProgress,
    [0, 0.29],
    reduceMotion ? [1, 1] : [1.04, 1.12],
  );

  const secondScale = useTransform(
    scrollYProgress,
    [0.21, 0.52],
    reduceMotion ? [1, 1] : [1.04, 1.12],
  );

  const thirdScale = useTransform(
    scrollYProgress,
    [0.44, 0.76],
    reduceMotion ? [1, 1] : [1.04, 1.12],
  );

  const fourthScale = useTransform(
    scrollYProgress,
    [0.68, 1],
    reduceMotion ? [1, 1] : [1.04, 1.12],
  );

  const firstTextY = useTransform(
    scrollYProgress,
    [0, 0.29],
    reduceMotion ? [0, 0] : [0, -45],
  );

  const secondTextY = useTransform(
    scrollYProgress,
    [0.21, 0.36, 0.52],
    reduceMotion ? [0, 0, 0] : [45, 0, -45],
  );

  const thirdTextY = useTransform(
    scrollYProgress,
    [0.44, 0.59, 0.76],
    reduceMotion ? [0, 0, 0] : [45, 0, -45],
  );

  const fourthTextY = useTransform(
    scrollYProgress,
    [0.68, 0.84],
    reduceMotion ? [0, 0] : [45, 0],
  );

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%'],
  );

  const sceneStyles = [
    {
      opacity: firstOpacity,
      scale: firstScale,
      y: firstTextY,
    },
    {
      opacity: secondOpacity,
      scale: secondScale,
      y: secondTextY,
    },
    {
      opacity: thirdOpacity,
      scale: thirdScale,
      y: thirdTextY,
    },
    {
      opacity: fourthOpacity,
      scale: fourthScale,
      y: fourthTextY,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative h-[420vh] bg-[#ecebe5] text-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          {scenes.map((scene, index) => (
            <motion.div
              key={scene.number}
              style={{
                opacity: sceneStyles[index].opacity,
              }}
              className="absolute inset-0"
            >
              <motion.div
                style={{
                  scale: sceneStyles[index].scale,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/70 to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="section-shell relative z-20 h-full">
          <div className="flex h-full items-center">
            <div className="relative min-h-[430px] w-full max-w-4xl">
              {scenes.map((scene, index) => (
                <motion.div
                  key={scene.number}
                  style={{
                    opacity: sceneStyles[index].opacity,
                    y: sceneStyles[index].y,
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-4 text-white">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#ffc62a]">
                      {scene.number}
                    </span>

                    <span className="h-px w-10 bg-white/25" />

                    <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/55">
                      {scene.eyebrow}
                    </span>
                  </div>

                  <h2 className="mt-7 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-[7rem] lg:leading-[0.9]">
                    {scene.title}
                  </h2>

                  <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                    {scene.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 z-30 hidden text-[10px] font-medium uppercase tracking-[0.24em] text-white/35 md:block">
          MailSignal · Product Story
        </div>

        <div className="absolute right-6 top-1/2 z-30 hidden h-44 w-px -translate-y-1/2 overflow-hidden bg-white/15 md:block">
          <motion.div
            style={{ height: progressHeight }}
            className="absolute inset-x-0 top-0 bg-[#ffc62a]"
          />
        </div>
      </div>
    </section>
  );
}
