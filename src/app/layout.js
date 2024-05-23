import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/main";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "KoytAnimeList",
  description: "Website Anime List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}