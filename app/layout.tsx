import type { Metadata } from "next";
import { Abel, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abel",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code",
});

export const metadata: Metadata = {
  title: "Michael Scott Boudreaux",
  description:
    "Official website of Michael Scott Boudreaux — singer-songwriter from Breaux Bridge, Louisiana.",
  openGraph: {
    title: "Michael Scott Boudreaux",
    siteName: "Michael Scott Boudreaux",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${abel.variable} ${sourceCodePro.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased">{children}</body>
    </html>
  );
}