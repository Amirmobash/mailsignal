'use client';

import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { useState } from 'react';

type LedPosition = {
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
  type: 'photo' | 'device';
  imagePosition?: string;
  showLed?: boolean;
  ledPosition?: LedPosition;
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
    type: 'photo',
    imagePosition: '55% 47%',
  },
  {
    number: '02',
    tab: 'Signal',
    eyebrow: 'Sofort sichtbar',
    title: 'Die LED zeigt neue Post.',
    text: 'Ein Blick genügt. Das Signal ist direkt am Briefkasten sichtbar – ohne App, WLAN oder Cloud.',
    image: '/images/how-it-works-step-2.png',
    alt: 'MailSignal an einem Briefkasten mit sichtbarer LED-Anzeige',
    type: 'photo',
    imagePosition: '50% 50%',
    showLed: true,

    /*
     * موقعیت چراغ مرحله Signal
     *
     * left کمتر شود: چراغ به چپ می‌رود.
     * top بیشتر شود: چراغ پایین‌تر می‌رود.
     */
    ledPosition: {
      left: '63.2%',
      top: '63.8%',
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
    type: 'device',
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  const active = steps[activeStep];
  const isDeviceStep = active.type === 'device';

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden bg-[#f1e5ca] py-24 text-[#19130f] sm:py-32 lg:py-40"
    >
      {/* Section background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[22%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#ffc62a]/10 blur-[190px]" />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/[0.08] to-transparent" />
      </div>

      <div className="section-shell relative z-10">
        {/* Section heading */}
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
          <div className="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-[#11110f] shadow-[0_35px_100px_rgba(55,35,5,0.18)]">
            {/* Visual area */}
            <div className="relative min-h-[570px] overflow-hidden sm:min-h-[640px] lg:min-h-[650px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${active.number}`}
                  initial={
                    reduceMotion
                      ? false
                      : isDeviceStep
                        ? {
                            opacity: 0,
                            scale: 0.9,
                          }
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
                          scale: isDeviceStep ? 0.93 : 0.99,
                        }
                  }
                  transition={{
                    duration: isDeviceStep ? 1.15 : 0.7,
                    ease: easing,
                  }}
                  className="absolute inset-0"
                >
                  {isDeviceStep ? (
                    <>
                      {/* Reset-step background */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_46%,rgba(255,198,42,0.14),transparent_30%),linear-gradient(135deg,#171611_0%,#0c0c0b_52%,#050505_100%)]" />

                      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

                      {/* Device */}
                      <div className="absolute inset-0 flex items-center justify-end [perspective:1900px]">
                        <motion.div
                          initial={
                            reduceMotion
                              ? false
                              : {
                                  rotateY: -48,
                                  rotateX: 10,
                                  rotateZ: -2,
                                  x: 95,
                                  y: 30,
                                  scale: 0.78,
                                }
                          }
                          animate={{
                            rotateY: -8,
                            rotateX: 2,
                            rotateZ: 0,
                            x: 0,
                            y: 0,
                            scale: 1,
                          }}
                          exit={
                            reduceMotion
                              ? undefined
                              : {
                                  rotateY: 36,
                                  rotateX: -8,
                                  rotateZ: 2,
                                  x: 90,
                                  y: -12,
                                  scale: 0.86,
                                }
                          }
                          whileHover={
                            reduceMotion
                              ? undefined
                              : {
                                  rotateY: -18,
                                  rotateX: 6,
                                  scale: 1.035,
                                }
                          }
                          transition={{
                            duration: 1.4,
                            ease: easing,
                          }}
                          className="relative mb-4 mr-[1%] h-[86%] w-[86%] sm:h-[92%] sm:w-[78%] lg:h-[96%] lg:w-[66%] [transform-style:preserve-3d]"
                        >
                          <Image
                            src={active.image}
                            alt={active.alt}
                            fill
                            priority
                            sizes="(max-width: 768px) 86vw, 820px"
                            className="select-none object-contain"
                          />

                          <div className="pointer-events-none absolute bottom-[2%] left-[18%] right-[4%] h-14 rounded-full bg-black/50 blur-2xl" />
                        </motion.div>
                      </div>

                      {/* Reset button indicator */}
                      <motion.div
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: 24,
                                scale: 0.9,
                              }
                        }
                        animate={{
                          opacity: 1,
                          x: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          x: 16,
                          scale: 0.9,
                        }}
                        transition={{
                          delay: reduceMotion ? 0 : 0.8,
                          duration: 0.6,
                          ease: easing,
                        }}
                        className="pointer-events-none absolute right-[5.1%] top-[49%] z-40 hidden -translate-y-1/2 sm:block lg:right-[4.2%]"
                      >
                        <div className="relative flex items-center">
                          {/* Thin yellow line toward the side button */}
                          <motion.div
                            animate={
                              reduceMotion
                                ? undefined
                                : {
                                    opacity: [0.4, 1, 0.4],
                                  }
                            }
                            transition={{
                              duration: 1.7,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="h-px w-20 bg-gradient-to-r from-transparent via-[#ffc62a]/70 to-[#ffc62a] lg:w-28"
                          />

                          {/* Yellow marker beside reset button */}
                          <motion.div
                            animate={
                              reduceMotion
                                ? undefined
                                : {
                                    opacity: [0.55, 1, 0.55],
                                    scaleY: [0.75, 1.15, 0.75],
                                  }
                            }
                            transition={{
                              duration: 1.7,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="h-10 w-[2px] origin-center rounded-full bg-[#ffc62a] shadow-[0_0_7px_2px_rgba(255,198,42,0.85),0_0_18px_5px_rgba(255,198,42,0.26)]"
                          />

                          <span className="absolute right-0 top-full mt-3 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ffc62a]">
                            Reset-Taste
                          </span>
                        </div>
                      </motion.div>

                      {/* Readability overlays */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/76 via-black/10 to-transparent" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                    </>
                  ) : (
                    <>
                      {/* Step 1 and Step 2 photo */}
                      <Image
                        src={active.image}
                        alt={active.alt}
                        fill
                        priority={activeStep === 0}
                        sizes="(max-width: 1280px) 100vw, 1240px"
                        style={{
                          objectPosition:
                            active.imagePosition ?? '50% 50%',
                        }}
                        className="object-cover"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />

                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(255,198,42,0.06),transparent_36%)]" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/68 via-black/20 to-transparent" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-black/5" />

                      {/* Animated LED — Step 2 only */}
                      {active.showLed && active.ledPosition && (
                        <>
                          {/* Large soft glow */}
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.7,
                            }}
                            animate={
                              reduceMotion
                                ? {
                                    opacity: 0.25,
                                    scale: 1,
                                  }
                                : {
                                    opacity: [0.06, 0.4, 0.06],
                                    scale: [0.72, 1.35, 0.72],
                                  }
                            }
                            exit={{
                              opacity: 0,
                              scale: 0.7,
                            }}
                            transition={{
                              duration: 1.65,
                              repeat: reduceMotion ? 0 : Infinity,
                              ease: 'easeInOut',
                            }}
                            style={{
                              left: active.ledPosition.left,
                              top: active.ledPosition.top,
                            }}
                            className="pointer-events-none absolute z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/30 blur-2xl"
                          />

                          {/* Medium halo */}
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.7,
                            }}
                            animate={
                              reduceMotion
                                ? {
                                    opacity: 0.7,
                                    scale: 1,
                                  }
                                : {
                                    opacity: [0.18, 0.85, 0.18],
                                    scale: [0.7, 1.25, 0.7],
                                  }
                            }
                            exit={{
                              opacity: 0,
                              scale: 0.7,
                            }}
                            transition={{
                              duration: 1.65,
                              repeat: reduceMotion ? 0 : Infinity,
                              ease: 'easeInOut',
                            }}
                            style={{
                              left: active.ledPosition.left,
                              top: active.ledPosition.top,
                            }}
                            className="pointer-events-none absolute z-30 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/70 blur-md"
                          />

                          {/* Main LED */}
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.65,
                            }}
                            animate={
                              reduceMotion
                                ? {
                                    opacity: 1,
                                    scale: 1,
                                  }
                                : {
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.78, 1.18, 0.78],
                                  }
                            }
                            exit={{
                              opacity: 0,
                              scale: 0.65,
                            }}
                            transition={{
                              duration: 1.65,
                              repeat: reduceMotion ? 0 : Infinity,
                              ease: 'easeInOut',
                            }}
                            style={{
                              left: active.ledPosition.left,
                              top: active.ledPosition.top,
                            }}
                            className="pointer-events-none absolute z-40 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe45c] shadow-[0_0_7px_3px_rgba(255,228,92,1),0_0_18px_8px_rgba(255,198,42,0.8),0_0_40px_16px_rgba(255,166,0,0.38)]"
                          />
                        </>
                      )}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Text content */}
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
                    delay: reduceMotion ? 0 : 0.14,
                    duration: 0.65,
                    ease: easing,
                  }}
                  className={`absolute bottom-10 left-0 z-50 px-7 text-white sm:bottom-12 sm:px-10 lg:bottom-14 lg:px-14 ${
                    isDeviceStep
                      ? 'w-full lg:w-[45%]'
                      : 'w-full'
                  }`}
                >
                  <div
                    className={
                      isDeviceStep ? 'max-w-lg' : 'max-w-2xl'
                    }
                  >
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

            {/* Step navigation below image */}
            <div className="relative z-30 border-t border-white/10 bg-[#0a0a09] px-4 py-4 sm:px-7 sm:py-5">
              <div className="relative grid grid-cols-3 overflow-hidden rounded-full border border-white/15 bg-black/55 p-1.5 backdrop-blur-xl">
                <motion.div
                  className="absolute bottom-1.5 top-1.5 rounded-full border border-[#ffc62a]/35 bg-[#ffc62a]/12 shadow-[0_0_30px_rgba(255,198,42,0.12)]"
                  animate={{
                    left: `calc(${activeStep * 33.333333}% + 0.375rem)`,
                    width: 'calc(33.333333% - 0.75rem)',
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

                      <span
                        className={
                          isActive
                            ? 'text-[#ffc62a]'
                            : 'text-white/75'
                        }
                      >
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
