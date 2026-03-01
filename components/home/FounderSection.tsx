interface FounderSectionProps {
  label: string;
  name: string;
  heading: string;
  paragraphs: string[];
  images?: {
    before: string;
    after: string;
  };
}

export default function FounderSection({
  label,
  name,
  heading,
  paragraphs,
  images,
}: FounderSectionProps) {
  return (
    <section id="founder" className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-orange-50/20 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Label */}
            <div className="inline-block">
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                {label}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              {heading}
            </h2>

            {/* Story paragraphs */}
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-slate-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-slate-200">
              <p className="text-2xl font-bold text-slate-900">— {name}</p>
            </div>
          </div>

          {/* Right - Visual card */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Card with pattern background */}
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-xl">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-5 rounded-2xl" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                <div className="relative space-y-4">
                  {/* Icon placeholder for founder image */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    {name.charAt(0)}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
                    <p className="text-slate-600">Twórca Lepiej Działaj</p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 italic">
                      "Pomogłem już setkom mężczyzn odnaleźć działające rozwiązania na wypadanie włosów"
                    </p>
                  </div>
                </div>

                {/* Orange accent corner */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 blur-2xl" />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-slate-900">Zweryfikowany ekspert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
