import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { HotjarSnippet } from "../controller/HotjarSnippet";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UtilityHarvest - Carbon Offsetting Agriculturally",
  description: "Precision in Carbon Offsetting - Transform Your Scope 3 Emission Challenge into Sustainable Impact for Consultancy and Rice Farmers",
  image: "/heroimage.jpg",
  url: "https://utilityharvest.web.app/",
  type: "website",
  robots: "follow, index",
  site_name: "UtilityHarvest",
  locale: "en",
  googlebot: "index, follow",
  bingbot: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <HotjarSnippet />
      </body>
      <GoogleAnalytics gaId="G-3G656JS04H" />
    </html>
  );
}
