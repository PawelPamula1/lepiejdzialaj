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
      <div className="max-w-[1314px] mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            {heading}
          </h2>
        </div>

        {/* Problem cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#F0E9E0] rounded-2xl p-8 hover:shadow-sm transition-all duration-300"
            >
              {/* Emoji */}
              <div className="text-5xl mb-4">{item.emoji}</div>

              {/* Text */}
              <p className="text-black/70 leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="text-center">
          <p className="text-2xl lg:text-3xl font-bold text-black">
            {closing}
          </p>
        </div>
      </div>
    </section>
  );
}
