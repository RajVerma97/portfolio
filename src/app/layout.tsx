"use client";

import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { CursorProvider } from "./components/CursorProvider";
import CustomCursor from "./components/CustomCursor";
import { useEffect } from "react"; // Import useEffect
import initAOS from "@/lib/initAos";
import { metadata } from "@/lib/metaData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize AOS
  useEffect(() => {
    initAOS(); // Initialize AOS
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorProvider>
          <NextUIProvider>{children}</NextUIProvider>
          <CustomCursor />
        </CursorProvider>
      </body>
    </html>
  );
}
