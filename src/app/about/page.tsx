// app/about/page.tsx
import React from 'react';

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#0a0a23] text-white flex items-center justify-center px-6 md:px-12">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 py-16">
        {/* Profile Image - RECTANGULAR & Grayscale */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/FB_IMG_1558170496399.jpg"
            alt="Profile"
            className="w-90 h-[42rem] object-cover grayscale shadow-xl"
          />
        </div>

        {/* About Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            <span className="text-[#4169E1]">Driven</span>, Innovative <br />
            Software <span className="text-[#4169E1]">Engineer</span>
          </h2>

          <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
            More than 2 years experience in the development of software and solutions.
            A conscientious person who pays attention to details. Very passionate about
            software development, always willing and ready to learn new things/concepts.
            Proven leader with the ability to streamline development processes to drive
            the achievement of organisational objectives.
          </p>

          <ul className="space-y-3 text-sm md:text-base">
            {[
              'Develop highly interactive Front end / User Interfaces for the web',
              'Progressive Web Applications (PWA) in normal and SPA Stacks',
              'Integration of third party services such as AWS / Digital Ocean',
              'Integration of payment services such as M-Pesa and PayPal etc',
              'Develop highly interactive Mobile Applications',
              'Develop highly interactive Backend / API services',
            ].map((text, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#4169E1] mr-2 mt-1">•</span>
                {text}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 text-[#4169E1] text-2xl">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
