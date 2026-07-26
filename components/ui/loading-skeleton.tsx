export function LoadingSkeleton() {
  return (
    <div aria-label="Loading content" className="site-container animate-pulse py-32" role="status">
      <div className="h-4 w-32 rounded-full bg-[var(--surface-strong)]" />
      <div className="mt-7 h-14 max-w-2xl rounded-2xl bg-[var(--surface-strong)]" />
      <div className="mt-4 h-6 max-w-xl rounded-xl bg-[var(--surface-strong)]" />
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div className="h-56 rounded-3xl bg-[var(--surface-strong)]" key={index} />
        ))}
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
