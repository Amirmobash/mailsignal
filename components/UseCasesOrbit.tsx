'use client';

import Image from 'next/image';
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
  Building2,
  BriefcaseBusiness,
  Home,
  Stethoscope,
  Sun,
  Warehouse,
  type LucideIcon,
} from 'lucide-react';
import {
  type MouseEvent,
  useRef,
  useState,
} from 'react';

type UseCase = {
  label: string;
  description: string;
  icon: LucideIcon;
  position: string;
  depth: number;
  align: 'left' | 'center' | 'right';
};

const useCases: UseCase[] = [
  {
    label: 'Ferienhaus',
    description:
      'Praktisch, wenn der Briefkasten nicht direkt vor der Tür steht.',
    icon: Sun,
    position:
      'left-1/2 top-[1%] -translate-x-1/2',
    depth: 0.5,
    align: 'center',
  },
  {
    label: 'Werkstatt',
    description:
      'Weniger Kontrollgänge im laufenden Betrieb.',
    icon: Warehouse,
    position:
      'left-[1%] top-[29%] xl:left-[4%]',
    depth: 0.78,
    align: 'left',
  },
  {
    label: 'Büro',
    description:
      'Posteingang erkennen, ohne ständig nachzusehen.',
    icon: BriefcaseBusiness,
    position:
      'right-[1%] top-[29%] xl:right-[4%]',
    depth: 0.82,
    align: 'right',
  },
  {
    label: 'Zuhause',
    description:
      'Keine unnötigen Wege zum Briefkasten.',
    icon: Home,
    position:
      'left-[1%] bottom-[13%] xl:left-[4%]',
    depth: 0.94,
    align: 'left',
  },
  {
    label: 'Praxis',
    description:
      'Neue Post sichtbar erkennen – auch im laufenden Betrieb.',
    icon: Stethoscope,
    position:
      'right-[1%] bottom-[13%] xl:right-[4%]',
    depth: 0.9,
    align: 'right',
  },
  {
    label: 'Mehrfamilienhaus',
    description:
      'Ein klares Signal direkt an der Briefkastenanlage.',
    icon: Building2,
    position:
      'bottom-[1%] left-1/2 -translate-x-1/2',
    depth: 0.6,
    align: 'center',
  },
];

type OrbitItemProps = {
  item: UseCase;
  index: number;
  activeCase: string | null;
  setActiveCase: (label: string | null) => void;
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
  reduceMotion: boolean | null;
};

function OrbitItem({
  item,
  index,
  activeCase,
  setActiveCase,
  smoothMouseX,
  smoothMouseY,
  reduceMotion,
}: OrbitItemProps) {
  const {
    label,
    description,
    icon: Icon,
    position,
    depth,
    align,
  } = item;

  const x = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : [-22 * depth, 22 * depth],
  );

  const y = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : [-16 * depth, 16 * depth],
  );

  const isActive = activeCase === label;

  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  const rowClasses = {
    left: 'flex-row',
    center: 'flex-col',
    right: 'flex-row-reverse',
  };

  return (
    <motion.button
      type="button"
      style={{ x, y }}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.85,
              y: 18,
            }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        delay: 0.12 + index * 0.065,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setActiveCase(label)}
      onMouseLeave={() => setActiveCase(null)}
      onFocus={() => setActiveCase(label)}
      onBlur={() => setActiveCase(null)}
      className={`absolute ${position} z-40 flex max-w-[235px] flex-col ${alignmentClasses[align]}`}
    >
      <div
        className={`flex items-center gap-3 ${rowClasses[align]}`}
      >
        <motion.span
          animate={{
            scale: isActive ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border backdrop-blur-md transition duration-300 ${
            isActive
              ? 'border-[#ffc62a]/70 bg-[#ffc62a]/12 text-[#ffc62a] shadow-[0_0_35px_rgba(255,198,42,0.22)]'
              : 'border-white/15 bg-black/35 text-white/65'
          }`}
        >
          <Icon className="h-[17px] w-[17px]" />
        </motion.span>

        <span
          className={`text-sm font-semibold tracking-[-0.02em] transition duration-300 ${
            isActive
              ? 'text-[#ffc62a]'
              : 'text-white/78'
          }`}
        >
          {label}
        </span>
      </div>

      <p
        className={`mt-2.5 text-[12px] leading-5 transition duration-300 ${
          isActive
            ? 'text-white/75'
            : 'text-white/40'
        }`}
      >
        {description}
      </p>
    </motion.button>
  );
}

export function UseCasesOrbit() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const [activeCase, setActiveCase] =
    useState<string | null>(null);

  const [deviceEngaged, setDeviceEngaged] =
    useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 95,
    damping: 21,
    mass: 0.62,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 95,
    damping: 21,
    mass: 0.62,
  });

  const rotateY = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : deviceEngaged
        ? [-17, 17]
        : [-11, 11],
  );

  const rotateX = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : deviceEngaged
        ? [14, -14]
        : [9, -9],
  );

  const deviceX = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : deviceEngaged
        ? [-32, 32]
        : [-22, 22],
  );

  const deviceY = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : deviceEngaged
        ? [-24, 24]
        : [-16, 16],
  );

  const glowX = useTransform(
    smoothMouseX,
    [-1, 1],
    ['40%', '60%'],
  );

  const glowY = useTransform(
    smoothMouseY,
    [-1, 1],
    ['42%', '60%'],
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.035, 0.12],
    [0.25, 1, 1],
  );

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.12],
    reduceMotion ? [0, 0] : [18, 0],
  );

  const stageOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.19],
    [0.3, 0.78, 1],
  );

  const stageY = useTransform(
    scrollYProgress,
    [0, 0.18],
    reduceMotion ? [0, 0] : [28, 0],
  );

  const deviceScale = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    reduceMotion
      ? [1, 1, 1]
      : [0.88, 1, 0.985],
  );

  const orbitScale = useTransform(
    scrollYProgress,
    [0, 0.2],
    reduceMotion
      ? [1, 1]
      : [0.94, 1],
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
    setActiveCase(null);

    if (!deviceEngaged) {
      setDeviceEngaged(false);
    }
  }

  return (
    <section
      ref={sectionRef}
      id="use-cases"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[165vh] bg-[#050504] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{
            left: glowX,
            top: glowY,
          }}
          className="pointer-events-none absolute h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/11 blur-[190px]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(255,198,42,0.06),transparent_36%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.012),transparent_25%,transparent_82%,rgba(0,0,0,0.4))]" />

        <div className="section-shell relative z-10 h-full">
          <motion.header
            style={{
              opacity: headingOpacity,
              y: headingY,
            }}
            className="absolute inset-x-0 top-0 z-50 mx-auto max-w-[980px] pt-5 text-center sm:pt-7 lg:pt-5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffc62a] sm:text-[11px]">
              Für jeden Alltag
            </p>

            <div className="mx-auto mt-2.5 h-px w-12 bg-[#ffc62a]/70" />

            <h2 className="mt-3.5 text-balance text-[2.25rem] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-[3rem] lg:text-[3.6rem] xl:text-[4rem]">
              Für jeden Briefkasten.
              <span className="block text-white/38">
                Für alle, die nicht umsonst nachsehen wollen.
              </span>
            </h2>

            <p className="mx-auto mt-3.5 max-w-2xl text-xs leading-5 text-white/44 sm:text-sm sm:leading-6">
              Ob Haus, Büro oder Mehrfamilienhaus –
              MailSignal macht neue Post sofort sichtbar.
            </p>
          </motion.header>

          <motion.div
            style={{
              opacity: stageOpacity,
              y: stageY,
              scale: orbitScale,
            }}
            className="absolute inset-x-0 bottom-[1%] top-[25%] z-20 lg:top-[23%]"
          >
            {/* مدار افقی اصلی */}
            <div className="pointer-events-none absolute left-1/2 top-[50%] hidden h-[67%] w-[93%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#ffc62a]/13 lg:block" />

            {/* مدار عمودی */}
            <div className="pointer-events-none absolute left-1/2 top-[50%] hidden h-[91%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#ffc62a]/[0.075] lg:block" />

            {/* مدار داخلی */}
            <div className="pointer-events-none absolute left-1/2 top-[50%] hidden h-[47%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-white/[0.055] lg:block" />

            {/* نقاط روی مدار */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.35, 1, 0.35],
                      scale: [0.8, 1.22, 0.8],
                    }
              }
              transition={{
                duration: 2.35,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-[10.5%] top-[49%] hidden h-1.5 w-1.5 rounded-full bg-[#ffc62a] shadow-[0_0_16px_rgba(255,198,42,0.95)] lg:block"
            />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [1, 0.35, 1],
                      scale: [1.22, 0.8, 1.22],
                    }
              }
              transition={{
                duration: 2.75,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute right-[10.5%] top-[49%] hidden h-1.5 w-1.5 rounded-full bg-[#ffc62a] shadow-[0_0_16px_rgba(255,198,42,0.95)] lg:block"
            />

            {/* دستگاه */}
            <div className="absolute inset-0 z-20 flex items-center justify-center [perspective:2100px]">
              <motion.div
                style={{
                  scale: deviceScale,
                }}
                className="relative h-[51vh] w-[51vh] min-h-[360px] min-w-[360px] max-h-[700px] max-w-[700px] sm:h-[57vh] sm:w-[57vh] lg:h-[64vh] lg:w-[64vh]"
              >
                <motion.button
                  type="button"
                  aria-label={
                    deviceEngaged
                      ? 'Stärkere 3D-Bewegung deaktivieren'
                      : 'Stärkere 3D-Bewegung aktivieren'
                  }
                  aria-pressed={deviceEngaged}
                  onClick={() =>
                    setDeviceEngaged(
                      (current) => !current,
                    )
                  }
                  style={{
                    rotateX,
                    rotateY,
                    x: deviceX,
                    y: deviceY,
                  }}
                  animate={{
                    scale: deviceEngaged
                      ? 1.065
                      : 1,
                    rotateZ: deviceEngaged
                      ? 0.7
                      : 0,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: deviceEngaged
                            ? 1.085
                            : 1.045,
                      }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                      }
                  }
                  transition={{
                    scale: {
                      type: 'spring',
                      stiffness: 230,
                      damping: 20,
                    },
                    rotateZ: {
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="relative h-full w-full cursor-pointer [transform-style:preserve-3d] focus:outline-none"
                >
                  <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[#ffc62a]/11 blur-[90px]" />

                  <div className="pointer-events-none absolute bottom-[5%] left-[16%] right-[12%] h-[12%] rounded-full bg-black/85 blur-2xl" />

                  <Image
                    src="/images/how-it-works-03-device.png"
                    alt="MailSignal Gerät"
                    fill
                    priority
                    draggable={false}
                    sizes="(max-width: 640px) 360px, (max-width: 1024px) 560px, 700px"
                    className="pointer-events-none select-none object-contain"
                  />

                  {/* LED — بالاتر و سمت چپ‌تر */}
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: [
                              0.42,
                              1,
                              0.42,
                            ],
                            scale: [
                              0.82,
                              1.28,
                              0.82,
                            ],
                          }
                    }
                    transition={{
                      duration: 2.05,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="pointer-events-none absolute left-[47.35%] top-[67.4%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] shadow-[0_0_8px_3px_rgba(255,198,42,1),0_0_28px_11px_rgba(255,198,42,0.5)] sm:h-3 sm:w-3"
                  />

                  {/* نشانه حالت تعاملی */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: deviceEngaged
                        ? 1
                        : 0,
                      scale: deviceEngaged
                        ? 1
                        : 0.8,
                    }}
                    className="pointer-events-none absolute bottom-[12%] left-1/2 -translate-x-1/2 rounded-full border border-[#ffc62a]/25 bg-black/45 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#ffc62a]/80 backdrop-blur-md"
                  >
                    3D aktiv
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>

            {/* موارد اطراف مدار در دسکتاپ */}
            <div className="absolute inset-0 z-30 hidden lg:block">
              {useCases.map((item, index) => (
                <OrbitItem
                  key={item.label}
                  item={item}
                  index={index}
                  activeCase={activeCase}
                  setActiveCase={setActiveCase}
                  smoothMouseX={smoothMouseX}
                  smoothMouseY={smoothMouseY}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            {/* موبایل */}
            <div className="absolute inset-x-0 bottom-3 z-40 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
              {useCases.map(
                ({
                  label,
                  description,
                  icon: Icon,
                }) => {
                  const isActive =
                    activeCase === label;

                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() =>
                        setActiveCase(
                          isActive
                            ? null
                            : label,
                        )
                      }
                      className={`relative flex min-h-11 items-center justify-center gap-2 rounded-full border px-3 text-[11px] font-semibold backdrop-blur-md transition ${
                        isActive
                          ? 'border-[#ffc62a]/50 bg-[#ffc62a]/12 text-[#ffc62a]'
                          : 'border-white/12 bg-black/35 text-white/60'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />

                      <span>{label}</span>

                      {isActive && (
                        <span className="absolute bottom-full left-1/2 mb-2 w-[210px] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/95 p-3 text-center text-[11px] font-normal leading-5 text-white/68 shadow-2xl">
                          {description}
                        </span>
                      )}
                    </button>
                  );
                },
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
