"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (value) => setShowTop(value > 0.12));
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-aqua via-signal to-amber"
        style={{ scaleX }}
      />
      <AnimatePresence>
        {showTop ? (
          <motion.a
            key="top"
            href="#home"
            aria-label="Back to top"
            className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-premium transition-colors hover:bg-aqua sm:bottom-8 sm:right-8"
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
          >
            <ArrowUp size={20} />
          </motion.a>
        ) : null}
      </AnimatePresence>
    </>
  );
}
