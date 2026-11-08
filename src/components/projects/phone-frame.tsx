import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  children?: ReactNode;
};

// A lightweight Android-style phone mockup.
export function PhoneFrame({ src, alt = "", className, priority, children }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-full rounded-[2.2rem] border border-white/15 bg-[#05090E] p-[7px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)]",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-navy-700">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 260px, 45vw"
            className="object-cover object-top"
          />
        ) : (
          children
        )}
        <span className="absolute left-1/2 top-2 h-[14px] w-[14px] -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-white/10" />
      </div>
    </div>
  );
}
