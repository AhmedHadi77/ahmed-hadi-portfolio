"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// reducedMotion="user" turns off transform/layout animations for visitors
// who enabled "reduce motion" in their OS settings.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
