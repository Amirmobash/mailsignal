'use client';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  type MouseEvent,
  type ReactNode,
  useRef,
} from 'react';

const moments = [
  {
    time: '08:20',
    label: 'Keine Post.',
  },
  {
    time: '11:45',
    label: 'Keine Post.',
  },
  {
    time: '15:10',
    label: 'Keine Post.',
  },
  {
    time: '18:30',
    label: 'Keine Post.',
  },
];

type StoryPanelProps = {
  children: ReactNode;
  className?: string;
};

function StoryPanel({
  children,
  className = '',
}: StoryPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 42,
              scale: 0.97,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        amount: 0.55,
        once: false,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex min-h-[78vh] items-center justify-center px-6 py-20 ${className}`}
    >
      {children}
    </motion.div>
  );
}

type CountPanelProps = {
  value: number;
};

function CountPanel({ value }: CountPanelProps) {
  const reduceMotion = useReducedMotion();
  const isZero = value === 0;

  return (
    <StoryPanel>
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-45 sm:text-xs">
          Unnötige Wege heute
        </p>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.72,
                  y: 35,
                }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            amount: 0.65,
            once: false,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  textShadow: [
                    '0 0 0 rgba(255,198,42,0)',
                    '0 0 55px rgba(255,198,42,0.18)',
                    '0 0 0 rgba(255,198,42,0)',
                  ],
                }
          }
          className="mt-6 text-[10rem] font-semibold leading-[0.8] tracking-[-0.11em] sm:text-[15rem] lg:text-[20rem]"
        >
          {value}
        </motion.div>

        <p className="mt-8 text-sm leading-6 opacity-45 sm:text-base">
          {isZero ? (
            'Kein unnötiger Weg mehr.'
          ) : (
            <>
              Mal nachgesehen.

              <span className="block">
                Nichts angekommen.
              </span>
            </>
          )}
        </p>
      </div>
    </StoryPanel>
  );
}

export function MinimalStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 70,
    damping: 24,
    mass: 0.8,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 70,
    damping: 24,
    mass: 0.8,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.28, 0.55, 0.78, 1],
    [
      '#050504',
      '#17130d',
      '#403726',
      '#998b6d',
      '#f1e5ca',
    ],
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.63, 0.82, 1],
    [
      '#ffffff',
      '#fff7e7',
      '#4a3d2e',
      '#19130f',
    ],
  );

  const glowX = useTransform(
    smoothMouseX,
    [-1, 1],
    ['42%', '58%'],
  );

  const glowY = useTransform(
    smoothMouseY,
    [-1, 1],
    ['42%', '58%'],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.82, 1],
    [0.11, 0.09, 0.055, 0.025],
  );

  function handleMouseMove(
    event: MouseEvent<HTMLElement>,
  ) {
    if (reduceMotion) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    const normalizedX =
      ((event.clientX - bounds.left) /
        bounds.width) *
        2 -
      1;

    const normalizedY =
      ((event.clientY - bounds.top) /
        bounds.height) *
        2 -
      1;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.section
      ref={sectionRef}
      id="minimal-story"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor,
        color: textColor,
      }}
      className="relative overflow-hidden"
    >
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          opacity: glowOpacity,
        }}
        className="pointer-events-none fixed z-0 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] blur-[200px]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_46%)]" />

      <div className="section-shell relative z-10">
        <StoryPanel className="min-h-screen">
          <div className="max-w-5xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffc62a] sm:text-xs">
              Ein ganz normaler Tag
            </p>

            <h2 className="mt-6 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
              Wie oft gehen Sie

              <span className="block">
                zum Briefkasten,
              </span>

              <span className="block opacity-40">
                ohne dass Post da ist?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 opacity-45 sm:text-lg sm:leading-8">
              Ein kurzer Weg. Immer wieder.
            </p>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 7, 0],
                      opacity: [0.25, 0.65, 0.25],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mx-auto mt-14 text-[9px] font-semibold uppercase tracking-[0.25em] opacity-35"
            >
              Scroll
            </motion.div>
          </div>
        </StoryPanel>

        <StoryPanel className="min-h-[92vh]">
          <div className="w-full max-w-6xl">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffc62a] sm:text-xs">
                Ein Tag
              </p>

              <p className="mt-3 text-sm opacity-45 sm:text-base">
                Vier kurze Kontrollen.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-16 sm:mt-20 lg:grid-cols-4 lg:gap-8">
              {moments.map(
                ({ time, label }, index) => (
                  <motion.div
                    key={time}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 30,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      amount: 0.6,
                      once: false,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <motion.span
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                opacity: [0.35, 1, 0.35],
                                scale: [0.8, 1.18, 0.8],
                                boxShadow: [
                                  '0 0 0 rgba(255,198,42,0)',
                                  '0 0 24px rgba(255,198,42,0.8)',
                                  '0 0 0 rgba(255,198,42,0)',
                                ],
                              }
                        }
                        transition={{
                          duration: 2.1 + index * 0.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="h-2.5 w-2.5 rounded-full bg-[#ffc62a]"
                      />

                      <p className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                        {time}
                      </p>
                    </div>

                    <p className="mt-3 text-sm opacity-45">
                      {label}
                    </p>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </StoryPanel>

        <CountPanel value={4} />
        <CountPanel value={3} />
        <CountPanel value={2} />
        <CountPanel value={1} />
        <CountPanel value={0} />

        <StoryPanel className="min-h-screen">
          <div className="max-w-5xl text-center">
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.38, 1, 0.38],
                      scale: [0.72, 1.35, 0.72],
                      boxShadow: [
                        '0 0 0 rgba(255,198,42,0)',
                        '0 0 18px rgba(255,198,42,0.95), 0 0 70px rgba(255,198,42,0.65)',
                        '0 0 0 rgba(255,198,42,0)',
                      ],
                    }
              }
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mx-auto h-5 w-5 rounded-full bg-[#ffc62a]"
            />

            <h2 className="mt-9 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
              Nur nachsehen,

              <span className="block">
                wenn es wirklich nötig ist.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 opacity-50 sm:text-lg sm:leading-8">
              Ein sichtbares Signal genügt.
            </p>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 8, 0],
                      opacity: [0.35, 0.75, 0.35],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mx-auto mt-14 flex flex-col items-center gap-2"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] opacity-45">
                Fragen & Antworten
              </span>

              <span className="h-9 w-px bg-gradient-to-b from-current to-transparent opacity-40" />
            </motion.div>
          </div>
        </StoryPanel>
      </div>
    </motion.section>
  );
}
