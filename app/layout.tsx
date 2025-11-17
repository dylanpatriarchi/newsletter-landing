import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: "Newsletter Rayo Consulting - AI, Risorse e Sconti Speciali",
  description: "Iscriviti alla newsletter di Rayo Consulting per ricevere news sull'AI, risorse esclusive e sconti speciali sui nostri servizi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${instrumentSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

