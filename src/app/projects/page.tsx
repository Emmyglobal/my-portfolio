export default function ProjectsPage() {
  return (
    <section className="bg-[#0a0a23] text-white py-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my past works across frontend, backend, and full-stack development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#4169E1]">School Dashboard App</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              An educational admin dashboard built with Next.js and Tailwind CSS.
            </p>
            <a
              href="#"
              className="inline-block text-[#4169E1] hover:underline text-sm"
            >
              View Project →
            </a>
          </div>

          <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#4169E1]">Blog CMS Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A blogging platform with admin, user login, and payment integration.
            </p>
            <a
              href="#"
              className="inline-block text-[#4169E1] hover:underline text-sm"
            >
              View Project →
            </a>
          </div>

          {/* Add more projects below as needed */}
        </div>
      </div>
    </section>
  );
}
