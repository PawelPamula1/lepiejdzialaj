import Link from 'next/link';

interface QuizCTASectionProps {
  heading: string;
  benefits: string[];
  leadMagnet: string;
  cta: {
    label: string;
    href: string;
  };
  socialProof: string;
}

export default function QuizCTASection({
  heading,
  benefits,
  leadMagnet,
  cta,
  socialProof,
}: QuizCTASectionProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-[#07223a]">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F3F3F1] leading-tight mb-12">
            {heading}
          </h2>

          {/* Benefits list */}
          <ul className="space-y-4 mb-8 text-left max-w-xl mx-auto">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FA6E21] flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-lg text-[#F3F3F1]/90 leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          {/* Lead magnet callout */}
          <div className="bg-[#2a2d34] backdrop-blur-sm border border-[#FA6E21]/20 rounded-2xl p-6 mb-8 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5 text-[#FA6E21] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-[#F3F3F1] font-semibold">{leadMagnet}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-white bg-[#f75800] rounded-[3rem] hover:bg-[#FA6E21] transition-all duration-300 shadow-xl shadow-[#f75800]/30"
            >
              {cta.label}
            </Link>

            {/* Social proof */}
            <p className="text-sm text-[#F3F3F1]/60">{socialProof}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
