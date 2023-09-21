import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get Clarifon",
  description: "Now you can get the best Air Ionizer. Claim clarifon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
