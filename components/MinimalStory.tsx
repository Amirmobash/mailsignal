'use client';

import {
  AnimatePresence,
  motion,
  type MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  type MouseEvent,
  useRef,
  useState,
} from 'react';

type StoryStage =
  | 'question'
  | 'moments'
  | 'count-4'
  | 'count-3'
  | 'count-2'
  | 'count-1'
  | 'count-0'
  | 'final';

type Moment = {
  time: string;
  label: string;
  position: string;
  depth: number;
};

const moments: Moment[] = [
  {
    time: '08:20',
    label: 'Keine Post.',
    position:
      'left-[7%] top-[24%] sm:left-[13%] lg:left-[19%]',
    depth: 0.75,
  },
  {
    time: '11:45',
    label: 'Keine Post.',
    position:
      'right-[7%] top-[24%] sm:right-[13%] lg:right-[19%]',
    depth: 1,
  },
  {
    time: '15:10',
    label: 'Keine Post.',
    position:
      'left-[9%] bottom-[24%] sm:left-[16%] lg:left-[22%]',
    depth: 0.9,
  },
  {
    time: '18:30',
    label: 'Keine Post.',
    position:
      'right-[8%] bottom-[24%] sm:right-[15%] lg:right-[21%]',
    depth: 0.7,
  },
];

type FloatingMomentProps = {
  moment: Moment;
  index: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  reduceMotion: boolean | null;
};

function FloatingMoment({
  moment,
  index,
  mouseX,
  mouseY,
  reduceMotion,
}: FloatingMomentProps) {
  const x = useTransform(
    mouseX,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : index % 2 === 0
        ? [-18 * moment.depth, 18 * moment.depth]
        : [18 * moment.depth, -18 * moment.depth],
  );

  const y = useTransform(
    mouseY,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : [-12 * moment.depth, 12 * moment.depth],
  );

  return (
    <motion.div
      style={{ x, y }}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.85,
              y: 20,
            }
      }
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -15,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute ${moment.position}`}
    >
      <div className="flex items-center gap-3">
        <motion.span
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.35, 1, 0.35],
                  scale: [0.8, 1.18, 0.8],
                  boxShadow: [
                    '0 0 0 rgba(255,198,42,0)',
                    '0 0 22px rgba(255,198,42,0.75)',
                    '0 0 0 rgba(255,198,42,0)',
                  ],
                }
          }
          transition={{
            duration: 2.1 + index * 0.22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-2.5 w-2.5 rounded-full bg-[#ffc62a]"
        />

        <p className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
          {moment.time}
        </p>
      </div>

      <p className="mt-2 pl-6 text-sm text-white/45">
        {moment.label}
      </p>
    </motion.div>
  );
}

function getCountFromStage(stage: StoryStage) {
  switch (stage) {
    case 'count-4':
      return 4;
    case 'count-3':
      return 3;
    case 'count-2':
      return 2;
    case 'count-1':
      return 1;
    case 'count-0':
      return 0;
    default:
      return null;
  }
}

export function MinimalStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const [stage, setStage] =
    useState<StoryStage>('question');

  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const smoothMouseX = useSpring(rawMouseX, {
    stiffness: 70,
    damping: 24,
    mass: 0.8,
  });

  const smoothMouseY = useSpring(rawMouseY, {
    stiffness: 70,
    damping: 24,
    mass: 0.8,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

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

  const countRotateY = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion ? [0, 0] : [-4, 4],
  );

  const countRotateX = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion ? [0, 0] : [4, -4],
  );

  useMotionValueEvent(
    scrollYProgress,
    'change',
    (progress) => {
      if (progress < 0.2) {
        setStage('question');
        return;
      }

      if (progress < 0.42) {
        setStage('moments');
        return;
      }

      if (progress < 0.53) {
        setStage('count-4');
        return;
      }

      if (progress < 0.63) {
        setStage('count-3');
        return;
      }

      if (progress < 0.73) {
        setStage('count-2');
        return;
      }

      if (progress < 0.82) {
        setStage('count-1');
        return;
      }

      if (progress < 0.9) {
        setStage('count-0');
        return;
      }

      setStage('final');
    },
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

    rawMouseX.set(normalizedX);
    rawMouseY.set(normalizedY);
  }

  function handleMouseLeave() {
    rawMouseX.set(0);
    rawMouseY.set(0);
  }

  const count = getCountFromStage(stage);
  const isFinal = stage === 'final';

  return (
    <section
      ref={sectionRef}
      id="minimal-story"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[600vh] bg-[#050504]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* پس‌زمینه تاریک اصلی */}
        <div className="absolute inset-0 bg-[#050504]" />

        {/* نور زرد دنبال‌کننده موس */}
        <motion.div
          style={{
            left: glowX,
            top: glowY,
          }}
          animate={{
            opacity: isFinal ? 0.05 : 0.12,
          }}
          transition={{
            duration: 0.8,
          }}
          className="pointer-events-none absolute h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] blur-[200px]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_46%)]" />

        {/* پس‌زمینه کرم فقط در مرحله نهایی */}
        <motion.div
          initial={false}
          animate={{
            opacity: isFinal ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute inset-0 bg-[#f1e5ca]"
        />

        <div className="section-shell relative z-10 h-full">
          <AnimatePresence initial={false}>
            {stage === 'question' && (
              <motion.div
                key="question"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 35,
                        scale: 0.97,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center justify-center px-6 text-center text-white"
              >
                <div className="max-w-5xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffc62a] sm:text-xs">
                    Ein ganz normaler Tag
                  </p>

                  <h2 className="mt-6 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
                    Wie oft gehen Sie

                    <span className="block">
                      zum Briefkasten,
                    </span>

                    <span className="block text-white/38">
                      ohne dass Post da ist?
                    </span>
                  </h2>

                  <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
                    Ein kurzer Weg. Immer wieder.
                  </p>
                </div>
              </motion.div>
            )}

            {stage === 'moments' && (
              <motion.div
                key="moments"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.95,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 text-white"
              >
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffc62a] sm:text-xs">
                      Ein Tag
                    </p>

                    <p className="mt-3 text-sm text-white/42 sm:text-base">
                      Vier kurze Kontrollen.
                    </p>
                  </div>
                </div>

                {moments.map((moment, index) => (
                  <FloatingMoment
                    key={moment.time}
                    moment={moment}
                    index={index}
                    mouseX={smoothMouseX}
                    mouseY={smoothMouseY}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </motion.div>
            )}

            {count !== null && (
              <motion.div
                key={`count-${count}`}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.78,
                        y: 40,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.12,
                  y: -30,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  rotateX: countRotateX,
                  rotateY: countRotateY,
                }}
                className="absolute inset-0 flex items-center justify-center text-center text-white [perspective:1500px]"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/42 sm:text-xs">
                    Unnötige Wege heute
                  </p>

                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            textShadow: [
                              '0 0 0 rgba(255,198,42,0)',
                              '0 0 45px rgba(255,198,42,0.16)',
                              '0 0 0 rgba(255,198,42,0)',
                            ],
                          }
                    }
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="mt-5 text-[11rem] font-semibold leading-[0.78] tracking-[-0.11em] sm:text-[16rem] lg:text-[21rem]"
                  >
                    {count}
                  </motion.div>

                  <p className="mt-8 text-sm leading-6 text-white/45 sm:text-base">
                    Mal nachgesehen.

                    <span className="block">
                      Nichts angekommen.
                    </span>
                  </p>
                </div>
              </motion.div>
            )}

            {stage === 'final' && (
              <motion.div
                key="final"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 40,
                        scale: 0.96,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center justify-center px-6 text-center text-[#19130f]"
              >
                <div className="max-w-5xl">
                  {/* سیگنال زرد نهایی */}
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: [0.4, 1, 0.4],
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

                  <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-black/48 sm:text-lg sm:leading-8">
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
                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/38">
                      Fragen & Antworten
                    </span>

                    <span className="h-9 w-px bg-gradient-to-b from-black/40 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* راهنمای Scroll */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 5, 0],
                    opacity: [0.3, 0.65, 0.3],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[0.25em] ${
              isFinal
                ? 'text-black/30'
                : 'text-white/30'
            }`}
          >
            Scroll
          </motion.div>
        </div>
      </div>
    </section>
  );
}
