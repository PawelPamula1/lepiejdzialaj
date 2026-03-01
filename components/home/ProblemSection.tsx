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
    <section className="relative py-20 lg:py-32 bg-[#F0F5FA]">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            {heading}
          </h2>
        </div>

        {/* Problem cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg hover:border-[#FA6E21]/20 border border-transparent transition-all duration-300"
            >
              {/* Emoji */}
              <div className="text-5xl mb-4">{item.emoji}</div>

              {/* Text */}
              <p className="text-[#111111]/70 leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="text-center">
          <p className="text-2xl lg:text-3xl font-bold text-[#FA6E21]">
            {closing}
          </p>
        </div>
      </div>
    </section>
  );
}
