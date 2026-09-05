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
      className={`relative flex min-h-[58vh] items-center justify-center px-6 py-10 sm:py-12 ${className}`}
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
    <StoryPanel className="min-h-[56vh]">
      <div className="text-center">
        {showCountLabel && (
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-55 sm:text-xs">
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
                    '0 0 0 rgba(249,115,22,0)',
                    '0 0 55px rgba(249,115,22,0.22)',
                    '0 0 0 rgba(249,115,22,0)',
                  ],
                }
          }
          className={`text-[10rem] font-semibold leading-[0.8] tracking-[-0.11em] sm:text-[15rem] lg:text-[20rem] ${
            showCountLabel ? 'mt-6' : ''
          }`}
        >
          {value}
        </motion.div>

        <p className="mt-8 text-sm leading-6 opacity-55 sm:text-base">
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

  /*
   * Background transition
   *
   * Dark Pumpkin
   *      ↓
   * Warm orange
   *      ↓
   * Peach
   *      ↓
   * Very light peach
   *      ↓
   * White
   */
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.24, 0.5, 0.76, 1],
    [
      '#2A1208',
      '#7C2D12',
      '#EA580C',
      '#FFE1CC',
      '#FFFFFF',
    ],
  );

  /*
   * Text automatically changes
   * from white to dark as the
   * background becomes brighter.
   */
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.52, 0.7, 0.84, 1],
    [
      '#FFFFFF',
      '#FFF7ED',
      '#FFF7ED',
      '#4A2414',
      '#171717',
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
    [0, 0.4, 0.72, 1],
    [0.18, 0.13, 0.07, 0.025],
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
      {/* Moving Pumpkin glow */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          opacity: glowOpacity,
        }}
        className="pointer-events-none fixed z-0 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] blur-[200px]"
      />

      {/* Very subtle atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_48%)]" />

      <div className="section-shell relative z-10">
        {/* INTRO */}
        <StoryPanel className="min-h-[58vh] py-10">
          <div className="max-w-5xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF8A2A] sm:text-xs">
              Ein ganz normaler Tag
            </p>

            <h2 className="mt-6 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
              Vier Wege.

              <span className="block opacity-45">
                Keiner davon nötig.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 opacity-55 sm:text-lg sm:leading-8">
              Immer wieder nachsehen. Immer wieder nichts.
            </p>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 7, 0],
                      opacity: [0.3, 0.75, 0.3],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mx-auto mt-10 text-[9px] font-semibold uppercase tracking-[0.25em] opacity-45"
            >
              Scroll
            </motion.div>
          </div>
        </StoryPanel>

        {/* COUNTING */}
        <CountPanel value={4} />
        <CountPanel value={3} />
        <CountPanel value={2} />
        <CountPanel value={1} />
        <CountPanel value={0} />

        {/* FINAL */}
        <StoryPanel className="min-h-[70vh]">
          <div className="max-w-5xl text-center">
            {/* MailSignal LED */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.4, 1, 0.4],
                      scale: [0.72, 1.35, 0.72],
                      boxShadow: [
                        '0 0 0 rgba(249,115,22,0)',
                        '0 0 18px rgba(249,115,22,0.95), 0 0 70px rgba(249,115,22,0.55)',
                        '0 0 0 rgba(249,115,22,0)',
                      ],
                    }
              }
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mx-auto h-5 w-5 rounded-full bg-[#F97316]"
            />

            <h2 className="mt-9 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
              Und genau dafür gibt es MailSignal.
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 opacity-60 sm:text-lg sm:leading-8">
              Ein kleines Signal. Ein großer Unterschied.
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
              className="mx-auto mt-12 flex flex-col items-center gap-2"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] opacity-50">
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
