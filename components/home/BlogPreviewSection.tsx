import Link from 'next/link';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  href: string;
  image?: string;
}

interface BlogPreviewSectionProps {
  heading: string;
  posts: BlogPost[];
  cta: {
    label: string;
    href: string;
  };
}

export default function BlogPreviewSection({
  heading,
  posts,
  cta,
}: BlogPreviewSectionProps) {
  // Format date to Polish format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              {heading}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Wiedza poparta nauką i doświadczeniem
            </p>
          </div>

          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 hover:gap-3 transition-all duration-300"
          >
            {cta.label}
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-orange-300 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Date */}
                <time className="text-sm text-slate-500 font-medium">
                  {formatDate(post.date)}
                </time>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                  <Link href={post.href} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                {/* Read more link */}
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 hover:gap-3 transition-all duration-300 pt-2"
                >
                  Czytaj więcej
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
