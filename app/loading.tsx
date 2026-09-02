export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink/15 border-t-ink" />
        <span className="font-mono text-xs uppercase tracking-widest2 text-ink-soft">Loading</span>
      </div>
    </div>
  );
}
