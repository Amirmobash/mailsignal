'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const steps = [
  {
    number: '01',
    tab: 'Einwurf',
    eyebrow: 'Post kommt an',
    title: 'Der Brief wird eingeworfen.',
    text: 'Beim Einwurf bewegt die Briefklappe den integrierten Mechanismus von MailSignal.',
    image: '/images/how-it-works-01.png',
    alt: 'Ein Brief wird in den Briefkasten eingeworfen',
  },
  {
    number: '02',
    tab: 'Signal',
    eyebrow: 'Sofort sichtbar',
    title: 'Die LED signalisiert neue Post.',
    text: 'MailSignal aktiviert das sichtbare Licht direkt am Briefkasten – ohne App, WLAN oder Cloud.',
    image: '/images/how-it-works-02.png',
    alt: 'Das MailSignal LED-Licht zeigt neue Post an',
  },
  {
    number: '03',
    tab: 'Reset',
    eyebrow: 'Einfach zurücksetzen',
    title: 'Mit einem Handgriff bereit.',
    text: 'Nach der Leerung wird MailSignal über die Taste am Gerät manuell zurückgesetzt.',
    image: '/images/how-it-works-03.png',
    alt: 'MailSignal wird manuell über die Taste zurückgesetzt',
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  const active = steps[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#f1e5ca] py-24 text-[#19130f] sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[22%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#ffc62a]/10 blur-[190px]" />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050504]/8 to-transparent" />
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
            amount: 0.7,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a96f00]">
            So funktioniert es
          </p>

          <h2 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem] lg:leading-[0.92]">
            Drei Schritte.
            <span className="block text-black/28">Ein klares Signal.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/48">
            Vom Briefeinwurf bis zum Reset – der gesamte Ablauf bleibt einfach,
            sichtbar und vollständig offline.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 w-full max-w-[1240px] sm:mt-20">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-[#15130f] shadow-[0_35px_100px_rgba(55,35,5,0.18)]">
            <div className="relative min-h-[620px] sm:min-h-[690px] lg:min-h-[650px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 1.025,
                        }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          scale: 0.99,
                        }
                  }
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.alt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1240px"
                    className="object-cover"
                    priority={activeStep === 0}
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/34 to-black/8" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/12" />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`copy-${active.number}`}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 24,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: -12,
                        }
                  }
                  transition={{
                    delay: reduceMotion ? 0 : 0.12,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-x-0 bottom-24 z-10 px-7 text-white sm:bottom-28 sm:px-10 lg:bottom-32 lg:px-14"
                >
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold tracking-[0.22em] text-[#ffc62a]">
                        {active.number}
                      </span>

                      <div className="h-px w-10 bg-white/20" />

                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                        {active.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                      {active.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
                      {active.text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute inset-x-5 bottom-5 z-20 sm:inset-x-8 sm:bottom-7">
              <div className="relative grid grid-cols-3 overflow-hidden rounded-full border border-white/15 bg-black/45 p-1.5 backdrop-blur-xl">
                <motion.div
                  className="absolute bottom-1.5 top-1.5 rounded-full border border-[#ffc62a]/30 bg-[#ffc62a]/14 shadow-[0_0_30px_rgba(255,198,42,0.1)]"
                  animate={{
                    left: `calc(${activeStep * 33.333333}% + 0.375rem)`,
                    width: 'calc(33.333333% - 0.75rem)',
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {steps.map((step, index) => {
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-pressed={isActive}
                      className={`relative z-10 flex min-h-14 items-center justify-center gap-2 rounded-full px-3 text-xs font-semibold transition duration-300 sm:min-h-16 sm:gap-3 sm:text-sm ${
                        isActive
                          ? 'text-[#ffc62a]'
                          : 'text-white/48 hover:text-white'
                      }`}
                    >
                      <span className="hidden text-[10px] tracking-[0.18em] opacity-55 sm:inline">
                        {step.number}
                      </span>

                      <span>{step.tab}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
