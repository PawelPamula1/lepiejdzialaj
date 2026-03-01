import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
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
        className={`${inter.variable} ${bricolageGrotesque.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
