import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  badge: string;
  subheading: string;
  cta: {
    label: string;
    href: string;
  };
  trustPoints: string[];
}

export default function HeroSection({
  badge,
  subheading,
  cta,
  trustPoints,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#F0F5FA] to-white">
      {/* Subtle orange accent blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#FA6E21]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-[#F4804C]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1314px] mx-auto px-4 sm:px-8 py-24 lg:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FA6E21]/10 text-[#f75800] text-xs font-bold uppercase tracking-wide border border-[#FA6E21]/20">
                {badge}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight font-display">
                <span className="block text-[#111111]">Zatrzymaj</span>
                <span className="block text-[#FA6E21]">wypadanie włosów</span>
              </h1>

              <p className="text-lg lg:text-xl text-[#111111]/60 leading-relaxed max-w-lg font-medium">
                {subheading}
              </p>
            </div>

            {/* CTA and Trust Points */}
            <div className="space-y-4">
              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={cta.href}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-[#f75800] rounded-full hover:bg-[#FA6E21] transition-all duration-300 shadow-xl shadow-[#f75800]/30 hover:shadow-[#f75800]/50 hover:-translate-y-0.5"
                >
                  {cta.label}
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 pt-1">
                {trustPoints.map((point, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-[#111111]/10 shadow-sm"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#FA6E21]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-[#111111]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-3 border-t border-[#111111]/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FA6E21] to-[#F4804C] border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-[#111111]">
                  400+ zadowolonych klientów
                </p>
                <p className="text-xs text-[#111111]/60">Dołącz do nich już dziś</p>
              </div>
            </div>
          </div>

          {/* Right column - Product Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-slide-in-right">
            <div className="relative w-full max-w-lg">
              {/* Glow effect behind product */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FA6E21]/30 via-[#F4804C]/20 to-transparent rounded-full blur-3xl scale-110" />

              {/* Product image */}
              <div className="relative">
                <Image
                  src="/images/produkty.webp"
                  alt="Produkty Lepiej Działaj na wypadanie włosów"
                  width={700}
                  height={700}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 -left-4 bg-white rounded-xl shadow-2xl p-4 border border-[#FA6E21]/20 max-w-[160px] animate-fade-in">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FA6E21] to-[#F4804C] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#111111]">100%</p>
                    <p className="text-[10px] text-[#111111]/60 leading-tight">
                      Naturalne składniki
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-8 -right-4 bg-white rounded-xl shadow-2xl p-4 border border-[#FA6E21]/20 max-w-[160px] animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FA6E21] to-[#F4804C] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#111111]">84%</p>
                    <p className="text-[10px] text-[#111111]/60 leading-tight">
                      Widoczne efekty
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
