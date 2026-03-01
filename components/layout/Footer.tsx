import Link from 'next/link';

interface FooterProps {
  siteName: string;
  links: {
    info: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
  };
  social: Array<{
    platform: string;
    href: string;
  }>;
  copyright: string;
}

export default function Footer({ siteName, links, social, copyright }: FooterProps) {
  return (
    <footer className="bg-[#eee2d7] border-t border-black/10">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-8 py-16 lg:py-20">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-black">
              {siteName}
            </Link>
            <p className="mt-4 text-sm text-black/60 leading-relaxed">
              Działaj mądrzej. Każdego dnia.
            </p>
          </div>

          {/* Info links */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
              Informacje
            </h3>
            <ul className="space-y-3">
              {links.info.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/70 hover:text-black transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
              Prawne
            </h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/70 hover:text-black transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
              Śledź nas
            </h3>
            <ul className="space-y-3">
              {social.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/70 hover:text-black transition-colors duration-200"
                  >
                    {item.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-black/10">
          <p className="text-sm text-black/60 text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
