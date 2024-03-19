import type { Metadata } from "next";
import { Roboto_Mono, Ruda } from "next/font/google";
import "./globals.css";
import { cx } from "@/utils";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rm",
});

const ruda = Ruda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rd",
});

export const metadata: Metadata = {
  title: "Paella",
  description: "Paella Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(roboto.variable, ruda.variable)}>{children}</body>
    </html>
  );
}
