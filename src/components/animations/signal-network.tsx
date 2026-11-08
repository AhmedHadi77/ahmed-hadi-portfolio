"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

// Server and first client render agree (motion on), then the real setting is applied.
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

// A field of "devices" (nodes) linked to their neighbours, with data packets
// travelling along the links. Pure SVG + SMIL, so it costs almost nothing.
const nodes: [number, number][] = [
  [80, 120], [260, 70], [420, 180], [180, 300], [360, 380], [90, 520],
  [300, 600], [540, 520], [620, 300], [760, 140], [880, 330], [980, 90],
  [1100, 220], [1040, 470], [860, 590], [700, 680], [1150, 640], [520, 60]
];

const links: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [3, 5], [5, 6], [4, 6], [4, 7],
  [2, 8], [7, 8], [8, 9], [9, 11], [9, 10], [10, 12], [11, 12], [10, 13],
  [12, 13], [13, 14], [7, 14], [14, 15], [6, 15], [13, 16], [1, 17], [17, 9]
];

const packets = [0, 3, 6, 9, 11, 14, 17, 19, 22, 24];

export function SignalNetwork({ className }: { className?: string }) {
  const reduce = usePrefersReducedMotion();

  return (
    <svg
      className={className}
      viewBox="0 0 1200 720"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="node-glow">
          <stop offset="0%" stopColor="#2EE6C9" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2EE6C9" stopOpacity="0" />
        </radialGradient>
      </defs>

      {links.map(([a, b], i) => (
        <path
          key={`l-${i}`}
          id={`link-${i}`}
          d={`M${nodes[a][0]} ${nodes[a][1]} L${nodes[b][0]} ${nodes[b][1]}`}
          stroke="rgba(46, 230, 201, 0.14)"
          strokeWidth="1"
          fill="none"
        />
      ))}

      {nodes.map(([x, y], i) => (
        <g key={`n-${i}`}>
          <circle cx={x} cy={y} r="14" fill="url(#node-glow)" opacity="0.25" />
          <circle cx={x} cy={y} r="3" fill={i % 5 === 0 ? "#F2A93B" : "#2EE6C9"} opacity="0.85">
            {!reduce ? (
              <animate
                attributeName="opacity"
                values="0.35;1;0.35"
                dur={`${2.4 + (i % 4) * 0.7}s`}
                repeatCount="indefinite"
              />
            ) : null}
          </circle>
        </g>
      ))}

      {!reduce
        ? packets.map((linkIndex, i) => (
            <circle key={`p-${i}`} r="2.6" fill={i % 3 === 0 ? "#F2A93B" : "#2EE6C9"}>
              <animateMotion
                dur={`${2.8 + (i % 5) * 0.6}s`}
                begin={`${i * 0.45}s`}
                repeatCount="indefinite"
                keyPoints={i % 2 ? "0;1" : "1;0"}
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href={`#link-${linkIndex}`} />
              </animateMotion>
            </circle>
          ))
        : null}
    </svg>
  );
}
