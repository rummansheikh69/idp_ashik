import { motion } from "framer-motion";
import { STEPS } from "../../lib/data";

export function HowItWorks() {
  return (
    <section
      id="process"
      className="py-24 bg-[linear-gradient(to_top,#7e1810,#312a74)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white underline decoration-white decoration-4 underline-offset-8">
            How We Work
          </h2>
        </div>

        {/* Desktop wave layout */}
        <div className="hidden lg:block">
          <WaveSteps />
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-6 ">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-start space-x-4 bg-card rounded-2xl p-5 shadow-md border border-border"
            >
              <div className="shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">
                  {step.label}
                </p>
                <h3 className="font-display font-bold text-white text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaveSteps() {
  // Circle centers in a 1200×320 coordinate space
  // Odd steps (1,3,5) → bottom (y=230), Even steps (2,4,6) → top (y=90)
  const positions = [
    { x: 100, y: 230 }, // Step 1 – bottom
    { x: 300, y: 90 }, // Step 2 – top
    { x: 500, y: 230 }, // Step 3 – bottom
    { x: 700, y: 90 }, // Step 4 – top
    { x: 900, y: 230 }, // Step 5 – bottom
    { x: 1100, y: 90 }, // Step 6 – top
  ];

  // Smooth sine-wave cubic bezier path through all circle centers
  const wavePath = `
    M 0,230
    C 50,230 50,230 100,230
    C 200,230 200,90 300,90
    C 400,90 400,230 500,230
    C 600,230 600,90 700,90
    C 800,90 800,230 900,230
    C 1000,230 1000,90 1100,90
    C 1150,90 1200,90 1200,90
  `.trim();

  // Colors cycle for variety — matching reddish theme
  const stepColors = [
    "hsl(358,68%,28%)", // deep red
    "hsl(16,88%,52%)", // orange-red accent
    "hsl(358,68%,28%)",
    "hsl(16,88%,52%)",
    "hsl(358,68%,28%)",
    "hsl(16,88%,52%)",
  ];

  const circleSize = 80; // px
  const VIEWBOX_W = 1200;
  const VIEWBOX_H = 320;

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: `${VIEWBOX_W} / ${VIEWBOX_H}` }}
    >
      {/* SVG wave line */}
      <svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        {/* Shadow/glow for the wave */}
        <path
          d={wavePath}
          stroke="hsl(358,68%,85%)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Main wave */}
        <path
          d={wavePath}
          stroke="url(#waveGrad)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="12 4"
        />
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(358,68%,40%)" />
            <stop offset="50%" stopColor="hsl(16,88%,55%)" />
            <stop offset="100%" stopColor="hsl(358,68%,40%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Step items */}
      {STEPS.map((step, i) => {
        const pos = positions[i];
        const isTop = pos.y < 160; // top position steps
        const color = stepColors[i];
        const leftPct = (pos.x / VIEWBOX_W) * 100;
        const topPct = (pos.y / VIEWBOX_H) * 100;

        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            className="absolute flex flex-col items-center"
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              transform: "translate(-50%, -50%)",
              width: "160px",
            }}
          >
            {/* Top label (for top-position steps) */}
            {isTop && (
              <div className="text-center mb-3 absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-44">
                <p
                  className="font-display font-bold text-sm mb-0.5"
                  style={{ color: "white" }}
                >
                  {step.label}
                </p>
                <p className="text-white font-semibold text-sm leading-tight">
                  {step.title}
                </p>
              </div>
            )}

            {/* Circle */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 border-white bg-white relative z-10 group hover:scale-110 transition-transform duration-300"
              style={{ boxShadow: `0 8px 24px -4px ${color}55` }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: `${color}18` }}
              >
                <step.icon className="w-7 h-7" style={{ color }} />
              </div>
            </div>

            {/* Bottom label (for bottom-position steps) */}
            {!isTop && (
              <div className="text-center mt-3 absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-44">
                <p
                  className="font-display font-bold text-sm mb-0.5"
                  style={{ color: "white" }}
                >
                  {step.label}
                </p>
                <p className="text-white font-semibold text-sm leading-tight">
                  {step.title}
                </p>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
