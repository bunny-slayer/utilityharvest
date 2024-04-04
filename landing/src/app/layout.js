import { Cookie, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { HotjarSnippet } from "../services/HotjarSnippet";
import { CookieConsent } from "../services/Cookies";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UtilityHarvest - Carbon Offsetting Agriculturally",
  description: "Precision in Carbon Offsetting - Transform Your Scope 3 Emission Challenge into Sustainable Impact for Consultancy and Rice Farmers",
  image: "../../public/heroimage.jpg",
  url: "https://utilityharvest.web.app/",
  type: "website",
  robots: "follow, index",
  site_name: "UtilityHarvest",
  locale: "en",
  googlebot: "index, follow",
  bingbot: "index, follow",
  opengraph: {
    type: "website",
    locale: "en",
    url: "https://utilityharvest.web.app/",
    title: "UtilityHarvest - Carbon Offsetting Agriculturally",
    description: "Precision in Carbon Offsetting - Transform Your Scope 3 Emission Challenge into Sustainable Impact for Consultancy and Rice Farmers",
    site_name: "UtilityHarvest",
    image: "../../public/heroimage.jpg",
    image_width: "1200",
    image_height: "630",
    image_alt: "UtilityHarvest - Carbon Offsetting Agriculturally",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-3G656JS04H" />
      <body className={inter.className}>
        <CookieConsent />
        <HotjarSnippet />
        {children}
      </body>
    </html>
  );
}
