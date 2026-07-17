'use client';

import Image from 'next/image';
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';

const storySteps = [
  {
    number: '01',
    eyebrow: 'Der Einwurf',
    title: 'Post kommt an.',
    description:
      'Die Bewegung der Einwurfklappe aktiviert den Mechanismus direkt am Briefkasten.',
    image: '/images/hero.png',
  },
  {
    number: '02',
    eyebrow: 'Die Erkennung',
    title: 'MailSignal reagiert.',
    description:
      'Ein einfacher und robuster Sensor erkennt den Einwurf – ohne App, WLAN oder Cloud.',
    image: '/images/product.png',
  },
  {
    number: '03',
    eyebrow: 'Das Signal',
    title: 'Die LED wird sichtbar.',
    description:
      'Ein klarer Lichtpunkt zeigt auf einen Blick, dass neue Post angekommen ist.',
    image: '/images/prototype.png',
  },
  {
    number: '04',
    eyebrow: 'Der Status',
    title: 'Die Information bleibt.',
    description:
      'Das Signal bleibt aktiv, bis der Briefkasten kontrolliert und MailSignal zurückgesetzt wird.',
    image: '/images/competition.png',
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [1, 1] : [1.02, 1.12],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['0%', '0%'] : ['0%', '-5%'],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0.08, 0.22, 0.6, 0.9],
  );

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const nextStep = Math.min(
      storySteps.length - 1,
      Math.floor(progress * storySteps.length),
    );

    setActiveStep(nextStep);
  });

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative h-[420vh] border-y border-white/10 bg-[#050505]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="section-shell grid h-full items-center gap-10 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="relative z-20 order-2 lg:order-1">
            <p className="eyebrow">So funktioniert MailSignal</p>

            <div className="relative mt-8 min-h-[340px] sm:min-h-[390px]">
              {storySteps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <motion.article
                    key={step.number}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : index < activeStep ? -32 : 32,
                      filter: isActive ? 'blur(0px)' : 'blur(10px)',
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-[#ffc62a]">
                        {step.number}
                      </span>

                      <span className="h-px w-12 bg-white/20" />

                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                        {step.eyebrow}
                      </span>
                    </div>

                    <h2 className="display-lg mt-8 max-w-3xl text-balance">
                      {step.title}
                    </h2>

                    <p className="copy-lg mt-7 max-w-xl">
                      {step.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {storySteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative h-[2px] flex-1 overflow-hidden bg-white/10"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: index <= activeStep ? 1 : 0,
                    }}
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 origin-left bg-[#ffc62a]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 m-auto h-[70%] w-[70%] rounded-full bg-[#ffc62a]/20 blur-[140px]"
              style={{ opacity: glowOpacity }}
            />

            <motion.div
              className="glass-panel relative mx-auto aspect-[4/5] max-h-[78vh] w-full max-w-[760px] overflow-hidden rounded-[2rem] lg:aspect-[5/4]"
              style={{
                scale: imageScale,
                y: imageY,
              }}
            >
              {storySteps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <motion.div
                    key={step.image}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 1.06,
                    }}
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </motion.div>
                );
              })}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

              <motion.div
                aria-hidden="true"
                initial={false}
                animate={{
                  opacity: activeStep >= 2 ? 1 : 0.15,
                  scale: activeStep >= 2 ? 1 : 0.7,
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.5,
                }}
                className="signal-glow absolute right-[13%] top-[62%] h-3 w-3 rounded-full bg-[#ffc62a]"
              />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 px-5 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{
                      backgroundColor:
                        activeStep >= 2 ? '#ffc62a' : '#4b4b4b',
                    }}
                    className="h-2.5 w-2.5 rounded-full"
                  />

                  <span className="text-sm font-medium text-white/75">
                    {activeStep >= 2 ? 'Signal aktiv' : 'Bereit'}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-[0.16em] text-white/35">
                  Offline by design
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.22em] text-white/30">
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
