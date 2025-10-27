// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "../../components/Sidebar";

// ✅ Import fonts using next/font
import { Poppins } from "next/font/google";
import { Great_Vibes } from "next/font/google";

// ✅ Configure the fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata = {
  title: "Nwafor Ugochukwu | Software Engineer & Educator",
  description:
    "Portfolio and educational platform of Nwafor Ugochukwu – Fullstack Developer & Educator.",
  icons: {
  icon: "/favicon.ico", // Path inside /public folder
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${greatVibes.variable}`}>
      <body className="bg-[#0a0a23] text-gray-900 font-sans">
        <div className="flex min-h-screen bg-[#0a0a23]">
          <Sidebar />
          <main className="flex-1 p-6 md:ml-64 transition-all duration-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}