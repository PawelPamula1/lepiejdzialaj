interface StatItem {
  value: string;
  description: string;
}

interface StatsSectionProps {
  heading: string;
  items: StatItem[];
}

export default function StatsSection({ heading, items }: StatsSectionProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            {heading}
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100/40 transition-all duration-500 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative space-y-3">
                {/* Value */}
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-orange-600 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 origin-left">
                  {item.value}
                </div>

                {/* Description */}
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-500/5 rounded-full group-hover:bg-orange-500/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Wypadanie włosów to naturalny proces, ale nie musisz czekać bezczynnie.{' '}
            <span className="font-semibold text-slate-900">
              Im wcześniej zaczniesz działać, tym lepsze będą rezultaty.
            </span>
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}
