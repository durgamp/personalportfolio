import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Durga Madhaba Padhy | Product Manager",
  description:
    "Product Manager with 5+ years of PM experience across Life Sciences, Fintech, and Manufacturing 4.0. Turning complexity into clarity through thoughtful product decisions.",
  keywords: [
    "Product Manager",
    "Digital Transformation",
    "Fintech",
    "Life Sciences",
    "AI Products",
  ],
  authors: [{ name: "Durga Madhaba Padhy" }],
  openGraph: {
    title: "Durga Madhaba Padhy | Product Manager",
    description:
      "Turning complexity into clarity through thoughtful product decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
