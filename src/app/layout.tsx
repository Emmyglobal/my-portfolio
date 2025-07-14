// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "../../components/Sidebar";

export const metadata = {
  title: "Nwafor Ugochukwu | Software Engineer & Educator",
  description: "Portfolio and educational platform of Nwafor Ugochukwu – Fullstack Developer & Educator.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/FB_IMG_1558170496399.jpg" type="image/jpeg" />
      </head>
      <body className="bg-[#0a0a23] text-gray-900">
        <div className="flex min-h-screen bg-[#0a0a23]">
          <Sidebar />
          {/* ✅ Clean margin logic */}
          <main className="flex-1 p-6 md:ml-64 transition-all duration-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}