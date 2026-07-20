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
import { type MouseEvent, useRef } from 'react';

type Moment = {
  time: string;
  label: string;
  position: string;
  depth: number;
  direction: 1 | -1;
};

const moments: Moment[] = [
  {
    time: '08:20',
    label: 'Keine Post.',
    position:
      'left-[6%] top-[31%] sm:left-[13%] sm:top-[30%] lg:left-[19%]',
    depth: 0.75,
    direction: 1,
  },
  {
    time: '11:45',
    label: 'Keine Post.',
    position:
      'right-[6%] top-[31%] sm:right-[13%] sm:top-[30%] lg:right-[19%]',
    depth: 1,
    direction: -1,
  },
  {
    time: '15:10',
    label: 'Keine Post.',
    position:
      'left-[8%] bottom-[27%] sm:left-[16%] lg:left-[22%]',
    depth: 0.9,
    direction: -1,
  },
  {
    time: '18:30',
    label: 'Keine Post.',
    position:
      'right-[7%] bottom-[27%] sm:right-[15%] lg:right-[21%]',
    depth: 0.7,
    direction: 1,
  },
];

type FloatingMomentProps = {
  moment: Moment;
  index: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  textColor: MotionValue<string>;
  mutedColor: MotionValue<string>;
  reduceMotion: boolean | null;
};

function FloatingMoment({
  moment,
  index,
  mouseX,
  mouseY,
  textColor,
  mutedColor,
  reduceMotion,
}: FloatingMomentProps) {
  const x = useTransform(
    mouseX,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : [
          -18 * moment.depth * moment.direction,
          18 * moment.depth * moment.direction,
        ],
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
      style={{
        x,
        y,
        color: textColor,
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
          {moment.time}
        </p>
      </div>

      <motion.p
        style={{
          color: mutedColor,
        }}
        className="mt-2 pl-6 text-sm"
      >
        {moment.label}
      </motion.p>
    </motion.div>
  );
}

type CountLayerProps = {
  value: number;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  y: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  textColor: MotionValue<string>;
  mutedColor: MotionValue<string>;
  reduceMotion: boolean | null;
};

function CountLayer({
  value,
  opacity,
  scale,
  y,
  rotateX,
  rotateY,
  textColor,
  mutedColor,
  reduceMotion,
}: CountLayerProps) {
  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        rotateX,
        rotateY,
        color: textColor,
      }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center [perspective:1500px]"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.p
          style={{
            color: mutedColor,
          }}
          className="text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs"
        >
          Unnötige Wege heute
        </motion.p>

        <motion.div
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
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mt-5 text-[10rem] font-semibold leading-[0.78] tracking-[-0.11em] sm:text-[15rem] lg:text-[20rem]"
        >
          {value}
        </motion.div>

        <motion.p
          style={{
            color: mutedColor,
          }}
          className="mt-8 text-sm leading-6 sm:text-base"
        >
          Mal nachgesehen.

          <span className="block">
            Nichts angekommen.
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
}

export function MinimalStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const smoothMouseX = useSpring(rawMouseX, {
    stiffness: 72,
    damping: 24,
    mass: 0.8,
  });

  const smoothMouseY = useSpring(rawMouseY, {
    stiffness: 72,
    damping: 24,
    mass: 0.8,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  /*
   * تغییر تدریجی رنگ:
   * مشکی → قهوه‌ای → بژ → کرم
   */
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.56, 0.79, 1],
    [
      '#050504',
      '#17130d',
      '#403726',
      '#998b6d',
      '#f1e5ca',
    ],
  );

  /*
   * رنگ تمام نوشته‌ها هم‌زمان با پس‌زمینه تغییر می‌کند.
   */
  const mainTextColor = useTransform(
    scrollYProgress,
    [0, 0.65, 0.84, 1],
    [
      '#ffffff',
      '#fff8ea',
      '#493d2f',
      '#19130f',
    ],
  );

  const mutedTextColor = useTransform(
    scrollYProgress,
    [0, 0.65, 0.84, 1],
    [
      'rgba(255,255,255,0.45)',
      'rgba(255,248,234,0.52)',
      'rgba(73,61,47,0.58)',
      'rgba(25,19,15,0.48)',
    ],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.82, 1],
    [0.12, 0.1, 0.07, 0.035],
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
    reduceMotion ? [0, 0] : [-4, 4],
  );

  const countRotateX = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion ? [0, 0] : [4, -4],
  );

  /*
   * مرحله ۱:
   * تیتر ثابت می‌ماند و فقط Fade می‌شود.
   */
  const questionOpacity = useTransform(
    scrollYProgress,
    [0, 0.11, 0.15, 0.18],
    [1, 1, 1, 0],
  );

  /*
   * هیچ حرکت رو به بالایی وجود ندارد.
   */
  const questionScale = useTransform(
    scrollYProgress,
    [0, 0.14, 0.18],
    reduceMotion ? [1, 1, 1] : [1, 1, 0.98],
  );

  /*
   * مرحله ۲:
   * ساعت‌ها فقط بعد از محوشدن تیتر وارد می‌شوند.
   */
  const momentsOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.22, 0.3, 0.34],
    [0, 1, 1, 0],
  );

  const momentsScale = useTransform(
    scrollYProgress,
    [0.18, 0.23, 0.34],
    reduceMotion ? [1, 1, 1] : [0.94, 1, 1.04],
  );

  /*
   * عدد 4
   */
  const count4Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.34, 0.4, 0.44],
    [0, 1, 1, 0],
  );

  const count4Scale = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.44],
    reduceMotion ? [1, 1, 1] : [0.84, 1, 1.08],
  );

  const count4Y = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.44],
    reduceMotion ? [0, 0, 0] : [35, 0, -22],
  );

  /*
   * عدد 3
   */
  const count3Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.44, 0.5, 0.54],
    [0, 1, 1, 0],
  );

  const count3Scale = useTransform(
    scrollYProgress,
    [0.4, 0.46, 0.54],
    reduceMotion ? [1, 1, 1] : [0.84, 1, 1.08],
  );

  const count3Y = useTransform(
    scrollYProgress,
    [0.4, 0.46, 0.54],
    reduceMotion ? [0, 0, 0] : [35, 0, -22],
  );

  /*
   * عدد 2
   */
  const count2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.54, 0.6, 0.64],
    [0, 1, 1, 0],
  );

  const count2Scale = useTransform(
    scrollYProgress,
    [0.5, 0.56, 0.64],
    reduceMotion ? [1, 1, 1] : [0.84, 1, 1.08],
  );

  const count2Y = useTransform(
    scrollYProgress,
    [0.5, 0.56, 0.64],
    reduceMotion ? [0, 0, 0] : [35, 0, -22],
  );

  /*
   * عدد 1
   */
  const count1Opacity = useTransform(
    scrollYProgress,
    [0.6, 0.64, 0.7, 0.74],
    [0, 1, 1, 0],
  );

  const count1Scale = useTransform(
    scrollYProgress,
    [0.6, 0.66, 0.74],
    reduceMotion ? [1, 1, 1] : [0.84, 1, 1.08],
  );

  const count1Y = useTransform(
    scrollYProgress,
    [0.6, 0.66, 0.74],
    reduceMotion ? [0, 0, 0] : [35, 0, -22],
  );

  /*
   * عدد 0
   */
  const count0Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.74, 0.8, 0.84],
    [0, 1, 1, 0],
  );

  const count0Scale = useTransform(
    scrollYProgress,
    [0.7, 0.76, 0.84],
    reduceMotion ? [1, 1, 1] : [0.84, 1, 1.06],
  );

  const count0Y = useTransform(
    scrollYProgress,
    [0.7, 0.76, 0.84],
    reduceMotion ? [0, 0, 0] : [35, 0, -20],
  );

  /*
   * پیام نهایی قبل از روشن‌شدن کامل صفحه وارد می‌شود.
   */
  const finalOpacity = useTransform(
    scrollYProgress,
    [0.79, 0.85, 0.92, 1],
    [0, 1, 1, 1],
  );

  const finalY = useTransform(
    scrollYProgress,
    [0.79, 0.87],
    reduceMotion ? [0, 0] : [35, 0],
  );

  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.78, 0.86],
    [0.38, 0.38, 0],
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

  return (
    <motion.section
      ref={sectionRef}
      id="minimal-story"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor,
      }}
      className="relative h-[460vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* نور زرد دنبال‌کننده موس */}
        <motion.div
          style={{
            left: glowX,
            top: glowY,
            opacity: glowOpacity,
          }}
          className="pointer-events-none absolute h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] blur-[200px]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_46%)]" />

        <div className="section-shell relative h-full">
          {/* سؤال اصلی */}
          <motion.div
            style={{
              opacity: questionOpacity,
              scale: questionScale,
            }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center text-white"
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

          {/* ساعت‌ها */}
          <motion.div
            style={{
              opacity: momentsOpacity,
              scale: momentsScale,
            }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <motion.div style={{ color: mainTextColor }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffc62a] sm:text-xs">
                  Ein Tag
                </p>

                <motion.p
                  style={{
                    color: mutedTextColor,
                  }}
                  className="mt-3 text-sm sm:text-base"
                >
                  Vier kurze Kontrollen.
                </motion.p>
              </motion.div>
            </div>

            {moments.map((moment, index) => (
              <FloatingMoment
                key={moment.time}
                moment={moment}
                index={index}
                mouseX={smoothMouseX}
                mouseY={smoothMouseY}
                textColor={mainTextColor}
                mutedColor={mutedTextColor}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.div>

          <CountLayer
            value={4}
            opacity={count4Opacity}
            scale={count4Scale}
            y={count4Y}
            rotateX={countRotateX}
            rotateY={countRotateY}
            textColor={mainTextColor}
            mutedColor={mutedTextColor}
            reduceMotion={reduceMotion}
          />

          <CountLayer
            value={3}
            opacity={count3Opacity}
            scale={count3Scale}
            y={count3Y}
            rotateX={countRotateX}
            rotateY={countRotateY}
            textColor={mainTextColor}
            mutedColor={mutedTextColor}
            reduceMotion={reduceMotion}
          />

          <CountLayer
            value={2}
            opacity={count2Opacity}
            scale={count2Scale}
            y={count2Y}
            rotateX={countRotateX}
            rotateY={countRotateY}
            textColor={mainTextColor}
            mutedColor={mutedTextColor}
            reduceMotion={reduceMotion}
          />

          <CountLayer
            value={1}
            opacity={count1Opacity}
            scale={count1Scale}
            y={count1Y}
            rotateX={countRotateX}
            rotateY={countRotateY}
            textColor={mainTextColor}
            mutedColor={mutedTextColor}
            reduceMotion={reduceMotion}
          />

          <CountLayer
            value={0}
            opacity={count0Opacity}
            scale={count0Scale}
            y={count0Y}
            rotateX={countRotateX}
            rotateY={countRotateY}
            textColor={mainTextColor}
            mutedColor={mutedTextColor}
            reduceMotion={reduceMotion}
          />

          {/* پیام نهایی */}
          <motion.div
            style={{
              opacity: finalOpacity,
              y: finalY,
              color: mainTextColor,
            }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center"
          >
            <div className="max-w-5xl">
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

              <motion.p
                style={{
                  color: mutedTextColor,
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
                <motion.span
                  style={{
                    color: mutedTextColor,
                  }}
                  className="text-[9px] font-semibold uppercase tracking-[0.25em]"
                >
                  Fragen & Antworten
                </motion.span>

                <motion.span
                  style={{
                    color: mutedTextColor,
                    background:
                      'linear-gradient(to bottom, currentColor, transparent)',
                  }}
                  className="h-9 w-px"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* راهنمای اسکرول */}
          <motion.div
            style={{
              opacity: scrollHintOpacity,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 5, 0],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40"
          >
            Scroll
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
