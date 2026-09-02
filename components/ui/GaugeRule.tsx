/**
 * GaugeRule — the site's signature visual motif.
 *
 * A measuring-tape / steel-rule tick scale, the tool every piece of
 * furniture in this business is built with. Used sparingly: once in the
 * hero margin, and as a horizontal divider between major homepage
 * sections. Purely decorative (aria-hidden) and respects
 * prefers-reduced-motion by never animating on its own.
 */
export function GaugeRule({
  orientation = "vertical",
  className = "",
  majorEvery = 5,
  count = 24,
}: {
  orientation?: "vertical" | "horizontal";
  className?: string;
  majorEvery?: number;
  count?: number;
}) {
  const ticks = Array.from({ length: count }, (_, i) => i);

  if (orientation === "horizontal") {
    return (
      <div
        aria-hidden="true"
        className={`flex w-full items-end justify-between ${className}`}
      >
        {ticks.map((i) => {
          const isMajor = i % majorEvery === 0;
          return (
            <span
              key={i}
              className={isMajor ? "h-4 w-px bg-ink/40" : "h-2 w-px bg-ink/15"}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`flex flex-col items-start gap-[6px] ${className}`}
    >
      {ticks.map((i) => {
        const isMajor = i % majorEvery === 0;
        return (
          <span
            key={i}
            className={isMajor ? "h-px w-5 bg-ink/40" : "h-px w-2.5 bg-ink/15"}
          />
        );
      })}
    </div>
  );
}
