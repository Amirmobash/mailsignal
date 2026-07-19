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
  | 'count'
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
      'left-[8%] top-[25%] sm:left-[14%] lg:left-[20%]',
    depth: 0.75,
  },
  {
    time: '11:45',
    label: 'Keine Post.',
    position:
      'right-[8%] top-[24%] sm:right-[14%] lg:right-[20%]',
    depth: 1,
  },
  {
    time: '15:10',
    label: 'Keine Post.',
    position:
      'left-[10%] bottom-[25%] sm:left-[17%] lg:left-[23%]',
    depth: 0.9,
  },
  {
    time: '18:30',
    label: 'Keine Post.',
    position:
      'right-[9%] bottom-[24%] sm:right-[16%] lg:right-[22%]',
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
        ? [-16 * moment.depth, 16 * moment.depth]
        : [16 * moment.depth, -16 * moment.depth],
  );

  const y = useTransform(
    mouseY,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : [-11 * moment.depth, 11 * moment.depth],
  );

  return (
    <motion.div
      style={{ x, y }}
      className={`absolute ${moment.position}`}
    >
      <div className="flex items-center gap-3">
        <motion.span
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.35, 1, 0.35],
                  scale: [0.8, 1.15, 0.8],
                }
          }
          transition={{
            duration: 2.1 + index * 0.25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-2 w-2 rounded-full bg-[#ffc62a] shadow-[0_0_16px_rgba(255,198,42,0.75)]"
        />

        <p className="text-2xl font-semibold tracking-[-0.045em] sm:text-3xl lg:text-4xl">
          {moment.time}
        </p>
      </div>

      <p className="mt-2 pl-5 text-xs text-white/42 sm:text-sm">
        {moment.label}
      </p>
    </motion.div>
  );
}

export function MinimalStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const [stage, setStage] =
    useState<StoryStage>('question');

  const [count, setCount] = useState(4);

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

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.48, 0.74, 1],
    [
      '#050504',
      '#17130d',
      '#8e8064',
      '#f1e5ca',
    ],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [0.12, 0.08, 0.04],
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

  const countRotateY = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion ? [0, 0] : [-3, 3],
  );

  const countRotateX = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion ? [0, 0] : [3, -3],
  );

  useMotionValueEvent(
    scrollYProgress,
    'change',
    (progress) => {
      if (progress < 0.23) {
        setStage('question');
        return;
      }

      if (progress < 0.46) {
        setStage('moments');
        return;
      }

      if (progress < 0.76) {
        setStage('count');

        const countProgress =
          (progress - 0.46) / 0.3;

        const nextCount = Math.max(
          0,
          4 - Math.floor(countProgress * 5),
        );

        setCount(nextCount);
        return;
      }

      setCount(0);
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

  const isLightStage = stage === 'final';

  return (
    <motion.section
      ref={sectionRef}
      id="minimal-story"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor }}
      className="relative h-[240vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{
            left: glowX,
            top: glowY,
            opacity: glowOpacity,
          }}
          className="pointer-events-none absolute h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] blur-[190px]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_46%)]" />

        <div className="section-shell relative h-full">
          <AnimatePresence mode="wait">
            {stage === 'question' && (
              <motion.div
                key="question"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 34,
                        scale: 0.97,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        y: -28,
                        scale: 1.02,
                      }
                }
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

                  <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/42 sm:text-lg sm:leading-8">
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
                        scale: 0.94,
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
                        scale: 1.04,
                      }
                }
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 text-white"
              >
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffc62a]">
                      Ein Tag
                    </p>

                    <p className="mt-3 text-sm text-white/38">
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

            {stage === 'count' && (
              <motion.div
                key={`count-${count}`}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.86,
                        y: 30,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        scale: 1.08,
                        y: -22,
                      }
                }
                transition={{
                  duration: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  rotateX: countRotateX,
                  rotateY: countRotateY,
                }}
                className="absolute inset-0 flex items-center justify-center text-center text-white [perspective:1400px]"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-[11px]">
                    Unnötige Wege heute
                  </p>

                  <div className="mt-3 text-[10rem] font-semibold leading-[0.82] tracking-[-0.1em] sm:text-[14rem] lg:text-[18rem]">
                    {count}
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/42 sm:text-base">
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
                        y: 34,
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
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center justify-center px-6 text-center text-[#19130f]"
              >
                <div className="max-w-5xl">
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: [0.45, 1, 0.45],
                            scale: [0.8, 1.18, 0.8],
                            boxShadow: [
                              '0 0 0 rgba(255,198,42,0)',
                              '0 0 50px rgba(255,198,42,0.55)',
                              '0 0 0 rgba(255,198,42,0)',
                            ],
                          }
                    }
                    transition={{
                      duration: 2.1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="mx-auto h-4 w-4 rounded-full bg-[#ffc62a]"
                  />

                  <h2 className="mt-8 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
                    Nur nachsehen,

                    <span className="block">
                      wenn es wirklich nötig ist.
                    </span>
                  </h2>

                  <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-black/46 sm:text-lg sm:leading-8">
                    Ein sichtbares Signal genügt.
                  </p>

                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: [0, 7, 0],
                            opacity: [0.35, 0.72, 0.35],
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="mx-auto mt-12 flex flex-col items-center gap-2"
                  >
                    <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-black/36">
                      Fragen & Antworten
                    </span>

                    <span className="h-8 w-px bg-gradient-to-b from-black/35 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className={`pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[0.23em] transition-colors duration-500 ${
              isLightStage
                ? 'text-black/28'
                : 'text-white/24'
            }`}
          >
            Scroll
          </div>
        </div>
      </div>
    </motion.section>
  );
}
