'use client';

import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { useState } from 'react';

type Position = {
  left: string;
  top: string;
};

type Step = {
  number: string;
  tab: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;

  imageFit: 'cover' | 'contain';
  imagePosition?: string;

  showSignalLed?: boolean;
  signalLedPosition?: Position;

  showResetIndicator?: boolean;
  resetIndicatorPosition?: Position;
};

const steps: Step[] = [
  {
    number: '01',
    tab: 'Einwurf',
    eyebrow: 'Post kommt an',
    title: 'Der Brief wird eingeworfen.',
    text: 'Beim Einwurf aktiviert die Briefklappe den integrierten Mechanismus von MailSignal.',
    image: '/images/how-it-works-step-1.png',
    alt: 'Ein Brief wird in einen Briefkasten mit MailSignal eingeworfen',
    imageFit: 'cover',
    imagePosition: '55% 47%',
  },
  {
    number: '02',
    tab: 'Signal',
    eyebrow: 'Sofort sichtbar',
    title: 'Die LED zeigt neue Post.',
    text: 'Ein Blick genügt. Das Signal ist direkt am Briefkasten sichtbar – ohne App, WLAN oder Cloud.',
    image: '/images/how-it-works-step-2.png',
    alt: 'MailSignal mit sichtbarer LED-Anzeige',
    imageFit: 'cover',
    imagePosition: '50% 50%',

    showSignalLed: true,

    /*
     * چراغ مرحله Signal
     *
     * left کمتر = چپ‌تر
     * left بیشتر = راست‌تر
     * top کمتر = بالاتر
     * top بیشتر = پایین‌تر
     */
    signalLedPosition: {
      left: '66.1%',
      top: '89.8%',
    },
  },
  {
    number: '03',
    tab: 'Reset',
    eyebrow: 'Manuell zurücksetzen',
    title: 'Per Knopfdruck zurücksetzen.',
    text: 'Nach der Leerung wird MailSignal über die kleine Taste an der Geräteseite zurückgesetzt.',
    image: '/images/how-it-works-03-device.png',
    alt: 'MailSignal Gerät mit seitlicher Reset-Taste',
    imageFit: 'contain',
    imagePosition: '50% 50%',

    showResetIndicator: true,

    /*
     * خط زرد کنار دکمه Reset
     */
    resetIndicatorPosition: {
      left: '75%',
      top: '55%',
    },
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  const active = steps[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden bg-[#f1e5ca] py-24 text-[#19130f] sm:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[22%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#ffc62a]/10 blur-[190px]" />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/[0.08] to-transparent" />
      </div>

      <div className="section-shell relative z-10">
        {/* Section title */}
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
            ease: easing,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a96f00]">
            So funktioniert es
          </p>

          <h2 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem] lg:leading-[0.92]">
            Drei Schritte.

            <span className="block text-black/28">
              Ein klares Signal.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/48">
            Vom Briefeinwurf bis zum Reset – der gesamte Ablauf bleibt einfach,
            sichtbar und vollständig offline.
          </p>
        </motion.div>

        {/* Main card */}
        <div className="mx-auto mt-16 w-full max-w-[1240px] sm:mt-20">
          <div className="overflow-hidden rounded-[2.25rem] border border-black/10 bg-[#10100f] shadow-[0_35px_100px_rgba(55,35,5,0.18)]">
            {/* Image area */}
            <div className="relative h-[570px] overflow-hidden bg-[#10100f] sm:h-[640px] lg:h-[650px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${active.number}`}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale:
                            active.imageFit === 'contain'
                              ? 0.94
                              : 1.025,
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
                          scale:
                            active.imageFit === 'contain'
                              ? 0.96
                              : 0.99,
                        }
                  }
                  transition={{
                    duration: 0.75,
                    ease: easing,
                  }}
                  className="absolute inset-0"
                >
                  {/* Image background for Reset */}
                  {active.imageFit === 'contain' && (
                    <>
                      <div className="absolute inset-0 bg-[#10100f]" />

                      <div className="pointer-events-none absolute left-[72%] top-[48%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[130px]" />
                    </>
                  )}

                  <Image
                    src={active.image}
                    alt={active.alt}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 1240px"
                    style={{
                      objectPosition:
                        active.imagePosition ?? '70% 50%',
                    }}
                    className={
                      active.imageFit === 'contain'
                        ? 'select-none object-contain object-[68%_50%] p-5 sm:p-8 lg:p-10'
                        : 'select-none object-cover'
                    }
                  />

                  {/* Light photo overlays */}
                  {active.imageFit === 'cover' && (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/[0.04]" />
                    </>
                  )}

                  {/* Reset image overlays */}
                  {active.imageFit === 'contain' && (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/12 to-transparent" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/[0.04]" />
                    </>
                  )}

                  {/* Signal LED */}
                  {active.showSignalLed &&
                    active.signalLedPosition && (
                      <>
                        {/* Large glow */}
                        <motion.div
                          animate={
                            reduceMotion
                              ? {
                                  opacity: 0.25,
                                  scale: 1,
                                }
                              : {
                                  opacity: [
                                    0.05,
                                    0.38,
                                    0.05,
                                  ],
                                  scale: [
                                    0.72,
                                    1.32,
                                    0.72,
                                  ],
                                }
                          }
                          transition={{
                            duration: 1.6,
                            repeat: reduceMotion
                              ? 0
                              : Infinity,
                            ease: 'easeInOut',
                          }}
                          style={{
                            left:
                              active.signalLedPosition.left,
                            top:
                              active.signalLedPosition.top,
                          }}
                          className="pointer-events-none absolute z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/32 blur-2xl"
                        />

                        {/* Medium glow */}
                        <motion.div
                          animate={
                            reduceMotion
                              ? {
                                  opacity: 0.65,
                                  scale: 1,
                                }
                              : {
                                  opacity: [
                                    0.16,
                                    0.8,
                                    0.16,
                                  ],
                                  scale: [
                                    0.72,
                                    1.22,
                                    0.72,
                                  ],
                                }
                          }
                          transition={{
                            duration: 1.6,
                            repeat: reduceMotion
                              ? 0
                              : Infinity,
                            ease: 'easeInOut',
                          }}
                          style={{
                            left:
                              active.signalLedPosition.left,
                            top:
                              active.signalLedPosition.top,
                          }}
                          className="pointer-events-none absolute z-30 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/70 blur-md"
                        />

                        {/* LED point */}
                        <motion.div
                          animate={
                            reduceMotion
                              ? {
                                  opacity: 1,
                                  scale: 1,
                                }
                              : {
                                  opacity: [
                                    0.4,
                                    1,
                                    0.4,
                                  ],
                                  scale: [
                                    0.78,
                                    1.2,
                                    0.78,
                                  ],
                                }
                          }
                          transition={{
                            duration: 1.6,
                            repeat: reduceMotion
                              ? 0
                              : Infinity,
                            ease: 'easeInOut',
                          }}
                          style={{
                            left:
                              active.signalLedPosition.left,
                            top:
                              active.signalLedPosition.top,
                          }}
                          className="pointer-events-none absolute z-40 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe45c] shadow-[0_0_7px_3px_rgba(255,228,92,1),0_0_18px_8px_rgba(255,198,42,0.8),0_0_40px_16px_rgba(255,166,0,0.38)]"
                        />
                      </>
                    )}

                  {/* Reset indicator */}
                  {active.showResetIndicator &&
                    active.resetIndicatorPosition && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: 14,
                        }}
                        transition={{
                          delay: reduceMotion ? 0 : 0.65,
                          duration: 0.55,
                          ease: easing,
                        }}
                        style={{
                          left:
                            active.resetIndicatorPosition.left,
                          top:
                            active.resetIndicatorPosition.top,
                        }}
                        className="pointer-events-none absolute z-50 -translate-y-1/2"
                      >
                        <div className="relative flex items-center">
                          {/* Horizontal line */}
                          <motion.div
                            animate={
                              reduceMotion
                                ? undefined
                                : {
                                    opacity: [
                                      0.35,
                                      1,
                                      0.35,
                                    ],
                                  }
                            }
                            transition={{
                              duration: 1.7,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="h-px w-16 bg-gradient-to-r from-transparent via-[#ffc62a]/60 to-[#ffc62a] lg:w-24"
                          />

                          {/* Vertical marker */}
                          <motion.div
                            animate={
                              reduceMotion
                                ? undefined
                                : {
                                    opacity: [
                                      0.55,
                                      1,
                                      0.55,
                                    ],
                                    scaleY: [
                                      0.78,
                                      1.15,
                                      0.78,
                                    ],
                                  }
                            }
                            transition={{
                              duration: 1.7,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="h-10 w-[2px] origin-center rounded-full bg-[#ffc62a] shadow-[0_0_7px_2px_rgba(255,198,42,0.8),0_0_18px_5px_rgba(255,198,42,0.25)]"
                          />

                          <span className="absolute right-0 top-full mt-3 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ffc62a]">
                            Reset-Taste
                          </span>
                        </div>
                      </motion.div>
                    )}
                </motion.div>
              </AnimatePresence>

              {/* Text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${active.number}`}
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
                    duration: 0.6,
                    ease: easing,
                  }}
                  className="absolute bottom-10 left-0 z-[60] w-full px-7 text-white sm:bottom-12 sm:px-10 lg:bottom-14 lg:w-[54%] lg:px-14"
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

                    <p className="mt-5 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                      {active.text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="relative z-30 border-t border-white/10 bg-[#0a0a09] px-4 py-4 sm:px-7 sm:py-5">
              <div className="relative grid grid-cols-3 overflow-hidden rounded-full border border-white/15 bg-black/55 p-1.5">
                <motion.div
                  className="absolute bottom-1.5 top-1.5 rounded-full border border-[#ffc62a]/35 bg-[#ffc62a]/10 shadow-[0_0_30px_rgba(255,198,42,0.1)]"
                  animate={{
                    left: `calc(${activeStep * 33.333333}% + 0.375rem)`,
                    width:
                      'calc(33.333333% - 0.75rem)',
                  }}
                  transition={{
                    duration: 0.45,
                    ease: easing,
                  }}
                />

                <div className="pointer-events-none absolute bottom-3 left-1/3 top-3 w-px bg-white/10" />

                <div className="pointer-events-none absolute bottom-3 left-2/3 top-3 w-px bg-white/10" />

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
                          : 'text-white/75 hover:text-white'
                      }`}
                    >
                      <span
                        className={`hidden text-[10px] tracking-[0.18em] sm:inline ${
                          isActive
                            ? 'text-[#ffc62a]'
                            : 'text-white/45'
                        }`}
                      >
                        {step.number}
                      </span>

                      <span>
                        {step.tab}
                      </span>
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
