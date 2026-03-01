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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F0E9E0]">
      <div className="relative max-w-[1314px] mx-auto px-8 py-32 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#eee2d7] text-black text-sm font-semibold border border-[#d4c4b0]">
                {badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-black">
              Skuteczne rozwiązania na wypadanie włosów
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-black/70 leading-relaxed max-w-xl">
              {subheading}
            </p>

            {/* CTA Button - Hims style with 3rem border radius */}
            <div className="space-y-4">
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-white bg-black rounded-[3rem] hover:bg-black/90 transition-all duration-300 ease-out"
              >
                {cta.label}
              </Link>

              {/* Trust points */}
              <div className="flex flex-wrap gap-6 pt-2">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-black/80">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Clean image presentation */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main transformation card - clean and minimal */}
              <div className="space-y-4">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/przemiana włosów 2.png"
                    alt="Transformacja włosów - przed i po"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                {/* Bottom info - minimal design */}
                <div className="bg-[#eee2d7] rounded-2xl p-6">
                  <p className="text-black font-semibold text-base mb-1">
                    Prawdziwe rezultaty
                  </p>
                  <p className="text-black/60 text-sm">
                    24 lata → 28 lat • Naturalne metody + konsekwencja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof - bottom of hero */}
        <div className="mt-16 pt-8 border-t border-black/10">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[#cc835c] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-black">
                Dołącz do 400+ mężczyzn
              </p>
              <p className="text-black/60">którzy już zrobili quiz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
