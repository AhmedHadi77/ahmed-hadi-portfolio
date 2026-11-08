"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. 0 disables tilt. */
  tilt?: number;
};

// A card with a pointer-following glow and a subtle 3D tilt on mouse devices.
export function SpotlightCard({ children, className, tilt = 3 }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 200, damping: 24 });
  const sy = useSpring(py, { stiffness: 200, damping: 24 });
  const rotateX = useTransform(sy, [0, 1], [tilt, -tilt]);
  const rotateY = useTransform(sx, [0, 1], [-tilt, tilt]);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    px.set(x);
    py.set(y);
    ref.current.style.setProperty("--mx", `${x * 100}%`);
    ref.current.style.setProperty("--my", `${y * 100}%`);
  }

  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={cn("spotlight", className)}
      style={tilt ? { rotateX, rotateY, transformPerspective: 1400 } : undefined}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}
