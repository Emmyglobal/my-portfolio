import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="grid md:grid-cols-2 items-center gap-10 min-h-screen px-6 py-16 bg-gradient-to-br from-white via-indigo-200 to-indigo-400">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-primaryText">
          Hi, I&apos;m{" "}
          <span className="text-indigo-600 font-semibold">
            Nwafor Ugochukwu Emmanuel
          </span>
        </h1>
        <p className="mb-6 text-xl text-secondaryText">
          Software Engineer • Educator • Consultant
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* ✅ Join Class Button Linked - full width on small screens, auto on larger */}
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

          {/* Download CV Button - full width on small screens */}
          <button className="w-full sm:w-auto border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-2 px-4 sm:px-6 rounded shadow-md transition flex items-center justify-center sm:justify-start gap-2">
            <Download />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      {/* ✅ Fixed Image Section */}
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