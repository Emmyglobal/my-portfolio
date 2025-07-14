import { ArrowRight, Download } from "lucide-react";

export default function HomePage() {
  return (
    <section className="grid md:grid-cols-2 items-center gap-10 min-h-screen px-6 py-16 bg-gradient-to-br from-white via-indigo-200 to-indigo-400">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-primaryText">
          Hi, I'm <span className="text-indigo-600 font-semibold">Nwafor Ugochukwu</span>
        </h1>
        <p className="mb-6 text-xl text-secondaryText">
          Software Engineer • Educator • Consultant
        </p>
        <div className="flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded shadow-md transition">
            <ArrowRight className="mr-2" />
            Join a Class
          </button>
          <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-2 px-4 rounded shadow-md transition">
            <Download className="mr-2" />
            Download CV
          </button>
        </div>
      </div>
      <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-indigo-600 shadow-lg">
        <img
          src="/FB_IMG_1558170496399.jpg"
          alt="Ugochukwu Portrait"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}
