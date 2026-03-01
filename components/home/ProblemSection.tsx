interface ProblemItem {
  emoji: string;
  text: string;
}

interface ProblemSectionProps {
  heading: string;
  items: ProblemItem[];
  closing: string;
}

export default function ProblemSection({
  heading,
  items,
  closing,
}: ProblemSectionProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {heading}
          </h2>
        </div>

        {/* Problem cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-8 border border-slate-200/60 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Emoji */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>

              {/* Text */}
              <p className="text-slate-700 leading-relaxed font-medium">
                {item.text}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/0 to-orange-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="text-center">
          <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            {closing}
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-slate-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}
