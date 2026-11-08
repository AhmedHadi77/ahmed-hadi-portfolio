"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/animations/split-text";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "mx-0",
        className
      )}
    >
      <motion.p
        className={cn(
          "mb-5 inline-flex items-center gap-2.5 text-sm font-semibold",
          dark ? "text-signal" : "text-[#00796E]"
        )}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className={cn("h-px w-8 origin-left", dark ? "bg-signal" : "bg-aqua")}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
        {eyebrow}
      </motion.p>
      <h2
        className={cn(
          "text-balance text-[2rem] font-bold leading-[1.05] sm:text-5xl lg:text-[3.5rem]",
          dark ? "text-white" : "text-ink"
        )}
      >
        <SplitText text={title} />
      </h2>
      {description ? (
        <motion.p
          className={cn(
            "text-pretty mt-6 max-w-2xl text-base leading-8 sm:text-lg",
            align === "center" && "mx-auto",
            dark ? "text-white/70" : "text-graphite"
          )}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
