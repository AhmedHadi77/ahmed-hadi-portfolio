"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Direction the content travels in from. */
  from?: "bottom" | "left" | "right" | "scale";
};

const offsets = {
  bottom: { y: 28 },
  left: { x: -36 },
  right: { x: 36 },
  scale: { scale: 0.94 }
};

export function Reveal({ children, className, delay = 0, from = "bottom" }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, filter: "blur(6px)", ...offsets[from] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
