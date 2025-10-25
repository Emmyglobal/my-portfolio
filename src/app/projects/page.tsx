import { useRef } from "react";

export default function ProjectsPage() {
  // Hover handlers for play/pause
  const handleMouseEnter = (event) => {
    const video = event.currentTarget;
    video.play();
  };

  const handleMouseLeave = (event) => {
    const video = event.currentTarget;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <section className="bg-[#0a0a23] text-white py-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* --- Projects Section --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my past works across frontend, backend, and full-stack development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#4169E1]">School Dashboard App</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              An educational admin dashboard built with Next.js and Tailwind CSS.
            </p>
            <a href="#" className="inline-block text-[#4169E1] hover:underline text-sm">
              View Project →
            </a>
          </div>

          <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#4169E1]">Blog CMS Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A blogging platform with admin, user login, and payment integration.
            </p>
            <a href="#" className="inline-block text-[#4169E1] hover:underline text-sm">
              View Project →
            </a>
          </div>
        </div>

        {/* --- Hands-on Video Section --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Hands-on Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch short clips of my hands-on practice projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { src: "videos/mortga.mp4", title: "Mortgage Calculator", link: "mortgage.html" },
            { src: "videos/landing.mp4", title: "Catering Landing Page", link: "landingPage.html" },
            { src: "videos/orbittec.mp4", title: "OrbitTech Website", link: "orbit.html" },
            { src: "videos/survey.mp4", title: "Survey Form", link: "survey.html" },
            { src: "videos/ecomerce.mp4", title: "E-commerce Website", link: "ecomerce2.html" },
            { src: "videos/other_projects.mp4", title: "Other Projects", link: "social.html" },
            { src: "videos/direct_message.mp4", title: "Direct Message App", link: "direct_message.html" },
            { src: "videos/payment.mp4", title: "Payment App", link: "payments.html" },
            { src: "videos/signup.mp4", title: "Sign Up Page", link: "signup.html" },
          ].map((video, index) => (
            <div
              key={index}
              className="bg-[#1a1a2e] p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-lg">
                <video
                  src={video.src}
                  muted
                  loop
                  className="w-full rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                ></video>
              </div>
              <a
                href={video.link}
                className="block text-[#4169E1] hover:underline text-sm font-semibold mt-2"
              >
                {video.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
