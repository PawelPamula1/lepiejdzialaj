import Link from 'next/link';
import Image from 'next/image';

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
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Diagonal background split */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual with icons */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {/* DHT Icon */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/DHT wlosy icon.png"
                  alt="DHT i miniaturyzacja włosa"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>

              {/* Spray Icon */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 mt-12">
                <Image
                  src="/images/sprej i wlosy icon 2.png"
                  alt="Spray na włosy"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>

              {/* Pills Icon */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 -mt-6">
                <Image
                  src="/images/sprej i tabletki icon.png"
                  alt="Suplementy i spray"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>

              {/* Chat Icon */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 mt-6">
                <Image
                  src="/images/icon_two_men_chat_transparent.png"
                  alt="Wsparcie społeczności"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {heading}
            </h2>

            {/* Benefits list */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1">
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
                  <span className="text-lg text-slate-200 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* Lead magnet callout */}
            <div className="bg-orange-500/20 border-2 border-orange-500/40 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-orange-400 flex-shrink-0"
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
                <p className="text-white font-semibold">{leadMagnet}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 transition-all duration-300"
              >
                {cta.label}
              </Link>

              {/* Social proof */}
              <p className="text-sm text-slate-400">
                {socialProof}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
