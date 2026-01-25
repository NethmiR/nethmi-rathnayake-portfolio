import { articles } from "@/data/articles";

export default function ArticlesSection() {
  return (
    <section id="articles" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 border-t border-[var(--gh-border-default)]">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-4">
          Articles & Blogs
        </h2>
        <p className="text-lg text-[var(--gh-fg-muted)] max-w-3xl">
          Sharing knowledge and insights through technical articles on Medium.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors group"
          >
            {/* Platform Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[var(--gh-accent-emphasis)] text-white rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                {article.platform.charAt(0).toUpperCase() + article.platform.slice(1)}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4 leading-tight group-hover:text-[var(--gh-accent-emphasis)] transition-colors">
              {article.title}
            </h3>

            {/* Read More Link */}
            <div className="flex items-center gap-2 text-[var(--gh-accent-emphasis)] text-sm font-medium">
              <span>Read article</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
