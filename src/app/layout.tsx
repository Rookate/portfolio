import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import ClientBody from "./ClientBody";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./context/themeProvider";
import { AboutProvider } from "./context/aboutContext";


const boldonse = localFont({
  src: [
    {
      path: '../../public/fonts/UTBoldonse.woff2',
      style: 'normal'
    },
  ],
  variable: '--font-boldonse'
});

const inter = Inter({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Gabriel Kopoin — Developpeur Full Stack",
  description: "Creative visual and graphic designer specializing in impactful branding, web design, and digital media. Transforming ideas into visually compelling experiences across platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html
        lang="en" className={`${inter.className} dark ${boldonse.variable}`}>
        <AboutProvider>
          <ClientBody>
            {children}
          </ClientBody>
        </AboutProvider>
      </html>
    </ThemeProvider>

  );
}
