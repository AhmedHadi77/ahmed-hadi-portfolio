"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
};

// Reveals a heading word by word, each word rising out of a clipped line.
export function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.045,
  immediate = false
}: SplitTextProps) {
  const words = text.split(" ");
  const viewProps = immediate
    ? { animate: "visible" as const }
    : { whileInView: "visible" as const, viewport: { once: true, amount: 0.5 } };

  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      {...viewProps}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
        >
          <motion.span
            className={cn("inline-block will-change-transform", wordClassName)}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
              }
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
