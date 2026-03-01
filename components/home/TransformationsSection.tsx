import Image from 'next/image';

interface Transformation {
  name: string;
  method: string;
  description: string;
  duration: string;
  result: string;
  images?: {
    before: string;
    after: string;
  };
}

interface TransformationsSectionProps {
  heading: string;
  items: Transformation[];
}

export default function TransformationsSection({
  heading,
  items,
}: TransformationsSectionProps) {
  // Use real images from public/images
  const realImages = [
    {
      before: '/images/przemiana włosów 1.png',
      after: '/images/przemiana włosów 1.png', // Same file has both
    },
    {
      before: '/images/przemiana włosów 2.png',
      after: '/images/przemiana włosów 2.png', // Same file has both
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {heading}
          </h2>
          <p className="text-xl text-slate-600">
            Rzeczywiste rezultaty naszych użytkowników
          </p>
        </div>

        {/* Transformations grid */}
        <div className="space-y-16">
          {items.map((item, index) => {
            // Use real images for first two items
            const imageSet = index < realImages.length ? realImages[index] : null;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Before/After images */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {imageSet ? (
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                      <Image
                        src={imageSet.before}
                        alt={`Transformacja ${item.name}`}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />

                      {/* Gradient overlay for visual appeal */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />

                      {/* Timeline badge */}
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                        <p className="text-sm font-bold text-slate-900">
                          {item.duration}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Placeholder for items without real images
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto flex items-center justify-center">
                          <span className="text-3xl text-white font-bold">
                            {item.name.charAt(0)}
                          </span>
                        </div>
                        <p className="text-slate-500 font-medium">{item.duration}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Name badge */}
                  <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 border border-orange-200">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm font-bold text-orange-900">
                      {item.name}
                    </span>
                  </div>

                  {/* Method */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    {item.method}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                        Czas kuracji
                      </p>
                      <p className="text-lg font-bold text-slate-900">
                        {item.duration}
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <p className="text-xs font-semibold text-orange-700 uppercase tracking-wider mb-1">
                        Rezultat
                      </p>
                      <p className="text-sm font-bold text-orange-900 leading-tight">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg">
            <p className="text-lg font-semibold text-slate-700">
              Chcesz podobnych efektów?
            </p>
            <p className="text-sm text-slate-600 max-w-md">
              Każda transformacja zaczęła się od jednego kroku. Sprawdź, co będzie działać w Twoim przypadku.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
