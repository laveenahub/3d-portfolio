"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20% fade out
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: 25% fade in, 35% fully visible, 45% fade out
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 55% fade in, 65% fully visible, 80% fade out
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center p-8">
      
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl">
          Laveena Chetwani.
        </h1>
        <p className="text-xl md:text-3xl text-neutral-300 font-light drop-shadow-lg">
          UI/UX Designer.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left max-w-7xl mx-auto w-full px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl drop-shadow-2xl">
          Creating user-focused digital experiences.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right max-w-7xl mx-auto w-full px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
          Optimizing user flows & conversions.
        </h2>
      </motion.div>

    </div>
  );
}
