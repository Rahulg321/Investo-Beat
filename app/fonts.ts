import { Montserrat, Fraunces } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});
