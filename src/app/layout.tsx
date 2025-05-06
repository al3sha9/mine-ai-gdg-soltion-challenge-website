import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Layout } from "@/components";
import localFont from "next/font/local";
import "animate.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const minecraft = localFont({
  src: [
    {
      path: "./Minecraft.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-minecraft",
});

export const metadata: Metadata = {
  title: "Mine-AI",
  description: "G for GDG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${poppins.className} ${minecraft.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
