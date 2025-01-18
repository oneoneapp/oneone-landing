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
  title: "One One",
  description: "Open Source social media service that turns your phone into a walkie-talkie",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "android-chrome",
      sizes: "192x192",
      url: "/web-app-manifest-192x192.png",
    },
    {
      rel: "android-chrome",
      sizes: "512x512",
      url: "/web-app-manifest-512x512.png",
    },
  ]
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
