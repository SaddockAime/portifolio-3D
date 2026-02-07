import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Chatbot from "@/components/Chatbot/Chatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", });

export const metadata = {
  title: "SaddockAime",
  description: "Full-stack developer specializing in Node.js, NestJS, Next.js, and Vue.js. Building innovative web solutions with modern technologies.",
  icons: {
    icon: '/icon.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
        {children}
        <FireFliesBackground />
        <Chatbot />
      </body>
    </html>
  );
}
