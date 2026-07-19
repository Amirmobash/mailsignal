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
  direction: 1 | -1;
};

const moments: Moment[] = [
  {
    time: '08:20',
    label: 'Keine Post.',
    position:
      'left-[7%] top-[24%] sm:left-[13%] lg:left-[19%]',
    depth: 0.75,
    direction: 1,
  },
  {
    time: '11:45',
    label: 'Keine Post.',
    position:
      'right-[7%] top-[24%] sm:right-[13%] lg:right-[19%]',
    depth: 1,
    direction: -1,
  },
  {
    time: '15:10',
    label: 'Keine Post.',
    position:
      'left-[9%] bottom-[24%] sm:left-[16%] lg:left-[22%]',
    depth: 0.9,
    direction: -1,
  },
  {
    time: '18:30',
    label: 'Keine Post.',
    position:
      'right-[8%] bottom-[24%] sm:right-[15%] lg:right-[21%]',
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
      : [
          -12 * moment.depth,
          12 * moment.depth,
        ],
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
      className="pointer-events-none absolute inset-0 flex items-center justify-center text-center [perspective:1500px]"
    >
      <div>
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
    damping: 24
