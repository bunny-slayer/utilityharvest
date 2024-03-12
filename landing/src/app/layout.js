import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UtilityHarvest",
  description: "Precision in Carbon Offsetting - Transform Your Scope 3 Challenge into Sustainable Impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-3G656JS04H" />
    </html>
  );
}
