export default function StatsSection() {
  return (
    <section className="bg-[var(--gh-canvas-subtle)] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center space-x-6 md:space-x-8 lg:space-x-32 gap-y-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[var(--gh-accent-fg)] mb-2">3+</div>
            <div className="text-sm md:text-base text-[var(--gh-fg-muted)]">Developer Journey</div>
            <div className="text-xs text-[var(--gh-fg-muted)] opacity-70">Years</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[var(--gh-success-fg)] mb-2">1</div>
            <div className="text-sm md:text-base text-[var(--gh-fg-muted)]">Industry Experience</div>
            <div className="text-xs text-[var(--gh-fg-muted)] opacity-70">Year</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[var(--gh-attention-fg)] mb-2">2</div>
            <div className="text-sm md:text-base text-[var(--gh-fg-muted)]">Research Works</div>
          </div>
        </div>
      </div>
    </section>
  );
}
