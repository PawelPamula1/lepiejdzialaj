import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Big Shoulders Display as fallback to Barlow Condensed
const bigShoulders = Barlow({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lepiej Działaj - Skuteczne rozwiązania na wypadanie włosów",
  description:
    "Dowiedz się, jak zatrzymać wypadanie włosów. Zrób bezpłatny quiz i otrzymaj plan dopasowany do Twojego typu łysienia. Bez ogólników - tylko konkretne kroki.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${barlow.variable} ${bigShoulders.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
