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
              y: 34,
              scale: 0.98,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        amount: 0.42,
        once: false,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex min-h-[64vh] items-center justify-center px-6 py-14 sm:py-16 ${className}`}
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
  const showCountLabel = value === 4;

  return (
    <StoryPanel className="min-h-[62vh]">
      <div className="text-center">
        {showCountLabel && (
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-45 sm:text-xs">
            Unnötige Wege heute
          </p>
        )}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.72,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            amount: 0.5,
            once: false,
          }}
          transition={{
            duration: 0.65,
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
          className={`text-[10rem] font-semibold leading-[0.8] tracking-[-0.11em] sm:text-[15rem] lg:text-[20rem] ${
            showCountLabel ? 'mt-6' : ''
          }`}
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
    [0, 0.25, 0.52, 0.77, 1],
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
    [0, 0.6, 0.81, 1],
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
    [0, 0.52, 0.81, 1],
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
        {/* Intro */}
        <StoryPanel className="min-h-[62vh] py-10">
          <div className="max-w-5xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffc62a] sm:text-xs">
              Ein ganz normaler Tag
            </p>

            <h2 className="mt-6 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
              Vier Wege.

              <span className="block opacity-40">
                Keiner davon nötig.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 opacity-45 sm:text-lg sm:leading-8">
              Immer wieder nachsehen. Immer wieder nichts.
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
              className="mx-auto mt-10 text-[9px] font-semibold uppercase tracking-[0.25em] opacity-35"
            >
              Scroll
            </motion.div>
          </div>
        </StoryPanel>

        {/* Counting sequence */}
        <CountPanel value={4} />
        <CountPanel value={3} />
        <CountPanel value={2} />
        <CountPanel value={1} />
        <CountPanel value={0} />

        {/* Final message */}
        <StoryPanel className="min-h-[82vh]">
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
