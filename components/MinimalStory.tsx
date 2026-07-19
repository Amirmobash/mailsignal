'use client';

import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  type MouseEvent,
  useRef,
} from 'react';

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
      'left-[8%] top-[28%] sm:left-[13%] lg:left-[18%]',
    depth: 0.7,
  },
  {
    time: '11:45',
    label: 'Keine Post.',
    position:
      'right-[8%] top-[25%] sm:right-[13%] lg:right-[18%]',
    depth: 1,
  },
  {
    time: '15:10',
    label: 'Keine Post.',
    position:
      'left-[10%] bottom-[25%] sm:left-[16%] lg:left-[21%]',
    depth: 0.9,
  },
  {
    time: '18:30',
    label: 'Keine Post.',
    position:
      'right-[9%] bottom-[24%] sm:right-[15%] lg:right-[20%]',
    depth: 0.65,
  },
];

type FloatingMomentProps = {
  moment: Moment;
  index: number;
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
  textColor: MotionValue<string>;
  mutedColor: MotionValue<string>;
  reduceMotion: boolean | null;
};

function FloatingMoment({
  moment,
  index,
  smoothMouseX,
  smoothMouseY,
  textColor,
  mutedColor,
  reduceMotion,
}: FloatingMomentProps) {
  const {
    time,
    label,
    position,
    depth,
  } = moment;

  const x = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : index % 2 === 0
        ? [-16 * depth, 16 * depth]
        : [16 * depth, -16 * depth],
  );

  const y = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : [-12 * depth, 12 * depth],
  );

  return (
    <motion.div
      style={{
        x,
        y,
        color: textColor,
      }}
      className={`absolute ${position}`}
    >
      <div className="flex items-center gap-3">
        <motion.span
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.45, 1, 0.45],
                  scale: [0.85, 1.12, 0.85],
                }
          }
          transition={{
            duration: 2.3 + index * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-2 w-2 rounded-full bg-[#ffc62a] shadow-[0_0_14px_rgba(255,198,42,0.7)]"
        />

        <p className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl lg:text-4xl">
          {time}
        </p>
      </div>

      <motion.p
        style={{
          color: mutedColor,
        }}
        className="mt-2 pl-5 text-xs sm:text-sm"
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export function MinimalStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 70,
    damping: 25,
    mass: 0.8,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 70,
    damping: 25,
    mass: 0.8,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.42, 0.78, 1],
    ['#050504', '#16120c', '#cdbb94', '#f1e5ca'],
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.68, 1],
    ['#ffffff', '#f7ead0', '#19130f'],
  );

  const mutedColor = useTransform(
    scrollYProgress,
    [0, 0.68, 1],
    [
      'rgba(255,255,255,0.42)',
      'rgba(255,244,219,0.48)',
      'rgba(25,19,15,0.46)',
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

  const questionOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.18, 0.3],
    [0, 1, 1, 0],
  );

  const questionY = useTransform(
    scrollYProgress,
    [0, 0.16, 0.3],
    reduceMotion
      ? [0, 0, 0]
      : [32, 0, -28],
  );

  const momentsOpacity = useTransform(
    scrollYProgress,
    [0.21, 0.32, 0.48, 0.57],
    [0, 1, 1, 0],
  );

  const momentsScale = useTransform(
    scrollYProgress,
    [0.21, 0.38, 0.57],
    reduceMotion
      ? [1, 1, 1]
      : [0.9, 1, 0.94],
  );

  const countOpacity = useTransform(
    scrollYProgress,
    [0.46, 0.58, 0.78, 0.86],
    [0, 1, 1, 0],
  );

  const countScale = useTransform(
    scrollYProgress,
    [0.46, 0.61, 0.82],
    reduceMotion
      ? [1, 1, 1]
      : [0.82, 1, 1.08],
  );

  const countY = useTransform(
    scrollYProgress,
    [0.46, 0.62, 0.84],
    reduceMotion
      ? [0, 0, 0]
      : [46, 0, -24],
  );

  const finalOpacity = useTransform(
    scrollYProgress,
    [0.76, 0.87, 1],
    [0, 1, 1],
  );

  const finalY = useTransform(
    scrollYProgress,
    [0.76, 0.9],
    reduceMotion
      ? [0, 0]
      : [40, 0],
  );

  const dotScale = useTransform(
    scrollYProgress,
    [0.74, 0.84, 0.92],
    [0.2, 1, 1],
  );

  const countValue = useTransform(
    scrollYProgress,
    [0.48, 0.57, 0.66, 0.74, 0.82],
    [4, 3, 2, 1, 0],
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
      }}
      className="relative h-[220vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{
            left: glowX,
            top: glowY,
          }}
          className="pointer-events-none absolute h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/10 blur-[180px]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_42%)]" />

        <div className="section-shell relative h-full">
          <motion.div
            style={{
              opacity: questionOpacity,
              y: questionY,
              color: textColor,
            }}
            className="absolute inset-0 flex items-center justify-center px-6 text-center"
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

                <span className="block opacity-45">
                  ohne dass Post da ist?
                </span>
              </h2>

              <motion.p
                style={{
                  color: mutedColor,
                }}
                className="mx-auto mt-7 max-w-xl text-base leading-7 sm:text-lg sm:leading-8"
              >
                Ein kurzer Weg. Immer wieder.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            style={{
              opacity: momentsOpacity,
              scale: momentsScale,
            }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                style={{
                  color: mutedColor,
                }}
                className="text-center"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em]">
                  Ein Tag
                </p>

                <p className="mt-3 text-sm">
                  Vier kurze Kontrollen.
                </p>
              </motion.div>
            </div>

            {moments.map((moment, index) => (
              <FloatingMoment
                key={moment.time}
                moment={moment}
                index={index}
                smoothMouseX={smoothMouseX}
                smoothMouseY={smoothMouseY}
                textColor={textColor}
                mutedColor={mutedColor}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.div>

          <motion.div
            style={{
              opacity: countOpacity,
              scale: countScale,
              y: countY,
              color: textColor,
            }}
            className="absolute inset-0 flex items-center justify-center text-center"
          >
            <div>
              <motion.p
                style={{
                  color: mutedColor,
                }}
                className="text-[11px] font-semibold uppercase tracking-[0.28em]"
              >
                Unnötige Wege heute
              </motion.p>

              <motion.div className="mt-4 text-[11rem] font-semibold leading-none tracking-[-0.09em] sm:text-[15rem] lg:text-[20rem]">
                {countValue}
              </motion.div>

              <motion.p
                style={{
                  color: mutedColor,
                }}
                className="-mt-2 text-sm sm:text-base"
              >
                Mal nachgesehen.

                <span className="block">
                  Nichts angekommen.
                </span>
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            style={{
              opacity: finalOpacity,
              y: finalY,
              color: textColor,
            }}
            className="absolute inset-0 flex items-center justify-center px-6 text-center"
          >
            <div className="max-w-5xl">
              <motion.div
                style={{
                  scale: dotScale,
                }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [
                          0.45,
                          1,
                          0.45,
                        ],
                        boxShadow: [
                          '0 0 0 rgba(255,198,42,0)',
                          '0 0 45px rgba(255,198,42,0.5)',
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

              <h2 className="mt-8 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.6rem]">
                Nur nachsehen,

                <span className="block">
                  wenn es wirklich nötig ist.
                </span>
              </h2>

              <motion.p
                style={{
                  color: mutedColor,
                }}
                className="mx-auto mt-7 max-w-xl text-base leading-7 sm:text-lg sm:leading-8"
              >
                Ein sichtbares Signal genügt.
              </motion.p>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, 7, 0],
                        opacity: [
                          0.35,
                          0.75,
                          0.35,
                        ],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="mx-auto mt-12 flex flex-col items-center gap-2"
              >
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-black/35">
                  Fragen & Antworten
                </span>

                <span className="h-7 w-px bg-gradient-to-b from-black/35 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
