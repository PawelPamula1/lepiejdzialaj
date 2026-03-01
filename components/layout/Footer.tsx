import Link from 'next/link';
import Image from 'next/image';

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
    <footer className="bg-[#111111] border-t border-[#F3F3F1]/10">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-8 py-16 lg:py-20">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/Logo.png"
                alt={siteName}
                width={140}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-[#F3F3F1]/60 leading-relaxed">
              Działaj mądrzej. Każdego dnia.
            </p>
          </div>

          {/* Info links */}
          <div>
            <h3 className="text-sm font-semibold text-[#FA6E21] uppercase tracking-wider mb-4">
              Informacje
            </h3>
            <ul className="space-y-3">
              {links.info.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F3F3F1]/70 hover:text-[#FA6E21] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-[#FA6E21] uppercase tracking-wider mb-4">
              Prawne
            </h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F3F3F1]/70 hover:text-[#FA6E21] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-sm font-semibold text-[#FA6E21] uppercase tracking-wider mb-4">
              Śledź nas
            </h3>
            <ul className="space-y-3">
              {social.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#F3F3F1]/70 hover:text-[#FA6E21] transition-colors duration-200"
                  >
                    {item.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-[#F3F3F1]/10">
          <p className="text-sm text-[#F3F3F1]/60 text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
