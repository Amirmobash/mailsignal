'use client';

import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useState } from 'react';

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

    signalLedPosition: {
      left: '66.1%',
      top: '91%',
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

    resetIndicatorPosition: {
      left: '74%',
      top: '49%',
    },
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    steps.forEach((step) => {
      const image = new window.Image();
      image.src = step.image;
    });
  }, []);

  const active = steps[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 text-[#171717] sm:py-20 lg:py-24"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[18%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#F97316]/[0.045] blur-[190px]" />

        <div className="absolute -right-32 bottom-[8%] h-[28rem] w-[28rem] rounded-full bg-[#FFB37C]/[0.08] blur-[180px]" />
      </div>

      <div className="section-shell relative z-10">
        {/* Heading */}
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F97316]">
            So funktioniert es
          </p>

          <h2 className="mt-5 text-balance text-5xl font-semibold tracking-[-0.06em] text-[#171717] sm:text-7xl lg:text-[6.5rem] lg:leading-[0.92]">
            Drei Schritte.

            <span className="block text-[#F97316]">
              Ein klares Signal.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/55">
            Vom Briefeinwurf bis zum Reset – der gesamte Ablauf bleibt einfach,
            sichtbar und vollständig offline.
          </p>
        </motion.div>

        {/* Main interactive card */}
        <div className="mx-auto mt-12 w-full max-w-[1240px] sm:mt-14">
          <div className="overflow-hidden rounded-[2.25rem] border border-[#F97316]/25 bg-[#171717] shadow-[0_28px_80px_rgba(249,115,22,0.14)]">
            {/* Image area */}
            <div className="relative h-[540px] overflow-hidden bg-[#171717] sm:h-[610px] lg:h-[630px]">
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
                  {/* Reset background */}
                  {active.imageFit === 'contain' && (
                    <>
                      <div className="absolute inset-0 bg-[#171717]" />

                      <div className="pointer-events-none absolute left-[72%] top-[48%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/[0.07] blur-[140px]" />
                    </>
                  )}

                  {/* Image */}
                  {active.imageFit === 'contain' ? (
                    <motion.div
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: 30,
                            }
                      }
                      animate={{
                        opacity: 1,
                        x: active.number === '03' ? 165 : 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: active.number === '03' ? 120 : 0,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: easing,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={active.image}
                        alt={active.alt}
                        fill
                        priority
                        sizes="(max-width: 1280px) 100vw, 1240px"
                        className="select-none object-contain p-5 sm:p-8 lg:p-10"
                      />
                    </motion.div>
                  ) : (
                    <Image
                      src={active.image}
                      alt={active.alt}
                      fill
                      priority={active.number === '01'}
                      sizes="(max-width: 1280px) 100vw, 1240px"
                      style={{
                        objectPosition:
                          active.imagePosition ?? '50% 50%',
                      }}
                      className="select-none object-cover"
                    />
                  )}

                  {/* Photo overlays */}
                  {active.imageFit === 'cover' && (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-black/[0.02]" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/[0.03]" />
                    </>
                  )}

                  {/* Reset overlays */}
                  {active.imageFit === 'contain' && (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/10 to-transparent" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </>
                  )}

                  {/* SIGNAL LED */}
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
                                    0.42,
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
                          className="pointer-events-none absolute z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/35 blur-2xl"
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
                                    0.18,
                                    0.85,
                                    0.18,
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
                          className="pointer-events-none absolute z-30 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/80 blur-md"
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
                                    0.45,
                                    1,
                                    0.45,
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
                          className="pointer-events-none absolute z-40 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8A2A] shadow-[0_0_7px_3px_rgba(255,138,42,1),0_0_18px_8px_rgba(249,115,22,0.85),0_0_40px_16px_rgba(249,115,22,0.42)]"
                        />
                      </>
                    )}

                  {/* RESET INDICATOR */}
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
                            className="h-px w-16 bg-gradient-to-r from-transparent via-[#F97316]/70 to-[#F97316] lg:w-24"
                          />

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
                            className="h-10 w-[2px] origin-center rounded-full bg-[#F97316] shadow-[0_0_7px_2px_rgba(249,115,22,0.85),0_0_18px_5px_rgba(249,115,22,0.3)]"
                          />

                          <span className="absolute right-0 top-full mt-3 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F97316]">
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
                      <span className="text-xs font-semibold tracking-[0.22em] text-[#F97316]">
                        {active.number}
                      </span>

                      <div className="h-px w-10 bg-white/25" />

                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                        {active.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                      {active.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                      {active.text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="relative z-30 border-t border-white/10 bg-[#111111] px-4 py-4 sm:px-7 sm:py-5">
              <div className="relative grid grid-cols-3 overflow-hidden rounded-full border border-white/15 bg-black/35 p-1.5">
                {/* Active orange pill */}
                <motion.div
                  className="absolute bottom-1.5 top-1.5 rounded-full border border-[#F97316]/60 bg-[#F97316]/20 shadow-[0_0_34px_rgba(249,115,22,0.18)]"
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
                      onClick={() =>
                        setActiveStep(index)
                      }
                      aria-pressed={isActive}
                      className={`relative z-10 flex min-h-14 items-center justify-center gap-2 rounded-full px-3 text-xs font-semibold transition duration-300 sm:min-h-16 sm:gap-3 sm:text-sm ${
                        isActive
                          ? 'text-[#FF8A2A]'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <span
                        className={`hidden text-[10px] tracking-[0.18em] sm:inline ${
                          isActive
                            ? 'text-[#F97316]'
                            : 'text-white/40'
                        }`}
                      >
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
