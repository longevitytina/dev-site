import type { Metadata } from "next";
import { Pixelify_Sans, Roboto_Mono
} from "next/font/google";
import "./globals.css";

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tina Taylor",
  description: "Portfolio work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelifySans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
