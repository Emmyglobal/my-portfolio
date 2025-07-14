import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="bg-[#0a0a23] text-white py-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Panel */}
        <div>
          <h3 className="uppercase text-sm tracking-widest text-gray-400 mb-2">Get in Touch</h3>
          <h2 className="text-4xl font-bold mb-4">
            Let's Talk For your <span className="text-[#4169E1]">Next Project(s)</span>
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Discuss a project or just want to say hi? Connect with me via email or through a phone call.
          </p>

          <ul className="text-sm text-gray-300 space-y-4 mb-8">
            <li className="flex items-center gap-2">✔️ 2+ Years of Experience</li>
            <li className="flex items-center gap-2">✔️ Professional Web Designer</li>
            <li className="flex items-center gap-2">✔️ Mobile Apps Development</li>
            <li className="flex items-center gap-2">✔️ Technical Mentorship</li>
            <li className="flex items-center gap-2">✔️ Fullstack Developer</li>
          </ul>

          <div className="flex gap-4 text-white text-xl">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition">
              <FaGithub />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition">
              <FaLinkedin />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition">
              <FaTwitter />
            </a>
            <a href="mailto:nwaforugochukwu21@gmail.com" className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Panel - Form */}
        <form className="bg-[#1a1a2e] p-8 rounded-lg shadow-md space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">Full Name *</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email Address *</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Phone Number</label>
              <input
                type="tel"
                placeholder="+234 703 199 2338"
                className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Subject</label>
              <input
                type="text"
                placeholder="I have a project for you"
                className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm">Message *</label>
            <textarea
              placeholder="Write your message..."
              className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 h-32"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#4169E1] hover:bg-blue-700 transition-colors duration-300 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-gray-500 text-sm">
        <p>
          Copyright © {new Date().getFullYear()}, <span className="text-[#4169E1]">Nwafor Ugochukwu</span>. All Rights Reserved
        </p>
        <div className="mt-2 flex justify-center gap-6 text-gray-400">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/resume" className="hover:text-white">Resume</a>
          <a href="/skills" className="hover:text-white">Skills</a>
          <a href="/projects" className="hover:text-white">Projects</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </section>
  );
}
