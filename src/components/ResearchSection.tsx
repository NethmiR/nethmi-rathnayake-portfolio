import { researchWork } from "@/data/research";

export default function ResearchSection() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 border-t border-[var(--gh-border-default)]">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-4">
          Research & Publications
        </h2>
        <p className="text-lg text-[var(--gh-fg-muted)] max-w-3xl">
          Contributing to academic knowledge through research in computer vision, machine learning, and intelligent systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchWork.map((research) => (
          <div
            key={research.id}
            className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors"
          >
            {/* Type Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[var(--gh-accent-emphasis)] text-white rounded-full">
                {research.type === "Research Paper" ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )}
                {research.type}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4 leading-tight">
              {research.title}
            </h3>

            {/* Status */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--gh-canvas-inset)] rounded border border-[var(--gh-border-default)]">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-[var(--gh-fg-default)]">
                  {research.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
