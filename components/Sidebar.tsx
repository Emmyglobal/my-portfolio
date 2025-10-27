"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Briefcase,
  User,
  Mail,
} from "lucide-react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const links = [
  { name: "Home", href: "/", icon: <Home className="w-4 h-4 mr-2" /> },
  { name: "Services", href: "/services", icon: <BookOpen className="w-4 h-4 mr-2" /> },
  { name: "Projects", href: "/projects", icon: <Briefcase className="w-4 h-4 mr-2" /> },
  { name: "About", href: "/about", icon: <User className="w-4 h-4 mr-2" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="w-4 h-4 mr-2" /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top bar toggle always visible */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#0a0a23] text-white px-4 py-3 z-50 shadow">
        <span className="text-2xl font-script tracking-wide text-white">
          <span className="text-[#4169E1]">N</span>wafor{" "}
          <span className="text-[#4169E1]">U</span>gochukwu
        </span>

        <button
          onClick={() => setOpen(!open)}
          className="text-white p-2 rounded hover:bg-[#1a1a2e]"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
          className={`fixed top-0 left-0 h-screen w-64 bg-[#0a0a23] text-white p-6 shadow-lg z-40 flex flex-col overflow-y-auto transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Section */}
        <div className="flex-1">
          {/* Logo */}
          <div className="mb-10 font-poppins text-white font-extrabold text-2xl tracking-wide pt-12">
            <span className="text-[#4169E1]">U</span>gochukwu
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    if (!isDesktop) setOpen(false);
                  }}
                  className={`transition-all duration-200 font-medium px-3 py-2 rounded inline-flex items-center ${
                    isActive
                      ? "bg-[#4169E1] text-white"
                      : "text-white hover:text-[#4169E1]"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://github.com/Emmyglobal"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nwafor-ugochukwu-54626b142/"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/nwaforugochukw"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/NwaforUgochukwuEmmanuel"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/nwaforugochukw"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/2347031992338"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#25D366] transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Footer - always visible but scrolls with content */}
        <div className="text-xs text-gray-400 mt-8 border-t border-gray-700 pt-4">
          <p className="mb-1">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#4169E1]">Nwafor Ugochukwu</span>
          </p>
          <p className="mb-1">Empowering brands through technology.</p>
          <p className="mb-1">Made with 💙 in Nigeria</p>
        </div>
      </aside>
    </>
  );
}