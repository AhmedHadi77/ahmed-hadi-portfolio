import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" && "text-center",
        align === "left" && "mx-0",
        className
      )}
    >
      <p className="mb-4 inline-flex rounded-lg border border-aqua/20 bg-aqua/10 px-3 py-1.5 text-sm font-black uppercase text-aqua">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
