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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Orange accent background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FA6E21]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F4804C]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1314px] mx-auto px-4 sm:px-8 py-32 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-[#111111]">Skuteczne rozwiązania na </span>
              <span className="text-[#FA6E21]">wypadanie włosów</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-[#111111]/70 leading-relaxed max-w-xl">
              {subheading}
            </p>

            {/* CTA Button */}
            <div className="space-y-4">
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-white bg-[#f75800] rounded-[3rem] hover:bg-[#bf4f29] transition-all duration-300 ease-out shadow-lg shadow-[#f75800]/20 hover:shadow-xl hover:shadow-[#f75800]/30"
              >
                {cta.label}
              </Link>

              {/* Trust points */}
              <div className="flex flex-wrap gap-6 pt-2">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#FA6E21]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-[#111111]/80">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Image with orange accent */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Orange glow background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FA6E21]/20 to-[#F4804C]/10 rounded-3xl blur-2xl" />

              {/* Main transformation card */}
              <div className="relative space-y-4">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-[#FA6E21]/10">
                  <Image
                    src="/images/przemiana włosów 2.png"
                    alt="Transformacja włosów - przed i po"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                {/* Bottom info card */}
                <div className="bg-[#2a2d34] rounded-2xl p-6">
                  <p className="text-white font-semibold text-base mb-1">
                    4 lata różnicy
                  </p>
                  <p className="text-white/70 text-sm">
                    24 lata → 28 lat • Naturalne metody + konsekwencja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
