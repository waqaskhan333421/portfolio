import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waqas Fazal | AI Engineer & Data Scientist",
  description:
    "Portfolio of Waqas Fazal — AI Engineer specializing in Machine Learning, NLP, Data Science, and Intelligent Systems. Building solutions that learn, predict, and automate.",
  keywords: [
    "Waqas Fazal",
    "AI Engineer",
    "Machine Learning",
    "Data Scientist",
    "NLP",
    "Deep Learning",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Portfolio",
  ],
  authors: [{ name: "Waqas Fazal" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Waqas Fazal | AI Engineer & Data Scientist",
    description:
      "Portfolio of Waqas Fazal — Building intelligent systems that learn, predict, and automate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
