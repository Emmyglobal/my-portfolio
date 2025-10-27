"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <section className="bg-[#0a0a23] text-white py-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Panel */}
        <div>
          <h3 className="uppercase text-sm tracking-widest text-gray-400 mb-2">Get in Touch</h3>
          <h2 className="text-4xl font-bold mb-4">
            {"Let's Talk For your "}
            <span className="text-[#4169E1]">Next Project(s)</span>
          </h2>

          <p className="text-gray-400 mb-6 max-w-md">
            Discuss a project or just want to say hi? Connect with me via email or through a phone call.
          </p>

          <ul className="text-sm text-gray-300 space-y-4 mb-8">
            <li>✔️ 2+ Years of Experience</li>
            <li>✔️ Professional Web Designer</li>
            <li>✔️ Mobile Apps Development</li>
            <li>✔️ Technical Mentorship</li>
            <li>✔️ Fullstack Developer</li>
          </ul>

          <div className="flex gap-4 text-white text-xl">
            <a href="https://github.com/Emmyglobal" className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/nwafor-ugochukwu-54626b142/" className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition"><FaLinkedin /></a>
            <a href="https://x.com/nwaforugochukw" className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition"><FaTwitter /></a>
            <a href="mailto:nwaforugochukwu21@gmail.com" className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-full hover:bg-[#4169E1] transition"><FaEnvelope /></a>
          </div>
        </div>

        {/* Right Panel - Form */}
        <form onSubmit={handleSubmit} className="bg-[#1a1a2e] p-8 rounded-lg shadow-md space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">Full Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email Address *</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="+234 703 199 2338"
                className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="I have a project for you"
                className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 h-32"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#4169E1] hover:bg-blue-700 transition-colors duration-300 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2"
          >
            Send Message <FaPaperPlane />
          </button>

          {status && <p className="text-gray-300 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}