import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ServEasy",
  description: "2 Clicks and it's here",
  icons: {
    icon: "/serveasy.jpg",
    apple: "/serveasy.jpg",
  },
  openGraph: {
    title: "ServEasy",
    description: "2 Clicks and it's here",
    images: [
      {
        url: "/serveasy630.jpg",
        width: 1024,
        height: 630,
        alt: "ServEasy Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ServEasy",
    description: "2 Clicks and it's here",
    images: ["/serveasy630.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
