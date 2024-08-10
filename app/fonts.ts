import { Alegreya } from "next/font/google";

export const alegereya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegereya",
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});
