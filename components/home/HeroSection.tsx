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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-slate-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-gradient-to-br from-orange-400/20 to-orange-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-slate-200/40 to-slate-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-br from-orange-300/10 to-orange-200/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <div className="space-y-8 lg:space-y-10 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 text-orange-900 text-sm font-bold border-2 border-orange-200/60 shadow-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                {badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
              <span className="block bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                Wypadają Ci
              </span>
              <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent mt-2">
                włosy?
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium">
              {subheading}
            </p>

            {/* CTA Section */}
            <div className="space-y-6">
              <Link
                href={cta.href}
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 transition-all duration-500 ease-out"
                style={{
                  backgroundSize: "200% auto",
                  backgroundPosition: "0% center",
                }}
              >
                {cta.label}
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              {/* Trust points */}
              <div className="flex flex-wrap gap-6">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
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
                    <span className="text-base font-semibold text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Visual with transformation images */}
          <div className="relative lg:h-[700px] flex items-center justify-center animate-slide-in-right">
            {/* Main transformation card */}
            <div className="relative w-full max-w-lg">
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-orange-400/30 to-orange-600/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-slate-300/40 to-slate-200/30 rounded-full blur-3xl" />

              {/* Transformation image card */}
              <div className="space-y-4">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                  <Image
                    src="/images/przemiana włosów 2.png"
                    alt="Transformacja włosów - przed i po"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                {/* Bottom info - now outside image */}
                <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
                  <p className="text-white font-bold text-lg mb-1">
                    4 lata różnicy
                  </p>
                  <p className="text-slate-300 text-sm">
                    24 lata → 28 lat. Naturalne metody + konsekwencja
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
