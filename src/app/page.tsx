import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Typed from "react-typed";

export default function HomePage() {
  return (
    <section className="grid md:grid-cols-2 items-center gap-10 min-h-screen px-6 py-16 bg-gradient-to-br from-white via-indigo-200 to-indigo-400">
      {/* Left Section */}
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-primaryText">
          Hi, I&apos;m{" "}
          <span className="text-indigo-600 font-semibold">
            <Typed
              strings={[
                "Nwafor Ugochukwu Emmanuel",
                "a Software Engineer",
                "an Educator",
                "a Consultant",
              ]}
              typeSpeed={80}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </span>
        </h1>

        <p className="mb-6 text-lg sm:text-xl text-secondaryText">
          Software Engineer • Educator • Consultant
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Join Class Button */}
          <a
            href="https://j-eblog.vercel.app/#services"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join a Class (opens in new tab)"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 sm:px-6 rounded shadow-md transition flex items-center justify-center sm:justify-start gap-2"
          >
            <ArrowRight />
            <span>Join a Class</span>
          </a>

          {/* Download CV Button */}
          <a
            href="/Resume-NWAFOR-UGOCHUKW-EMMANUEL-Business-Web-Solutions-(UK).pdf"
            download="Nwafor-Ugochukwu-Emmanuel-CV.pdf"
            className="w-full sm:w-auto border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-2 px-4 sm:px-6 rounded shadow-md transition flex items-center justify-center sm:justify-start gap-2"
          >
            <Download />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-8 text-indigo-700 text-2xl">
          <a
            href="https://www.facebook.com/NwaforUgochukwuEmmanuel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-900 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/nwaforugochukw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-900 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/2347031992338"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-indigo-600 shadow-lg relative">
        <Image
          src="/FB_IMG_1558170496399.jpg"
          alt="Ugochukwu Portrait"
          fill
          className="object-top object-cover"
          priority
        />
      </div>
    </section>
  );
}