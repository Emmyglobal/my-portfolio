'use client';

import React from 'react';
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCogs,
  FaCreditCard,
  FaUserFriends,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={30} className="text-[#4169E1]" />,
    title: 'Web Development',
    description:
      'Modern and mobile-ready websites that help you reach your business and marketing goals.',
  },
  {
    icon: <FaPaintBrush size={30} className="text-[#4169E1]" />,
    title: 'UI/UX Design',
    description:
      'Craft intuitive interfaces and delightful experiences by blending aesthetics with usability.',
  },
  {
    icon: <FaMobileAlt size={30} className="text-[#4169E1]" />,
    title: 'App Development',
    description:
      'Build fast and scalable mobile-ready applications tailored to your business needs.',
  },
  {
    icon: <FaCogs size={30} className="text-[#4169E1]" />,
    title: 'API Design / Integration',
    description:
      'Secure, scalable REST & GraphQL API development and seamless third-party integration.',
  },
  {
    icon: <FaCreditCard size={30} className="text-[#4169E1]" />,
    title: 'Payment Integration',
    description:
      'Enable fast and secure payment solutions directly on your platform.',
  },
  {
    icon: <FaUserFriends size={30} className="text-[#4169E1]" />,
    title: 'Mentorship',
    description:
      'Sharing knowledge and guiding budding developers to thrive in tech.',
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-[#0a0a23] text-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="uppercase text-sm tracking-widest text-gray-400 mb-2 font-medium">
          I like to make things easy and fun
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          My <span className="text-[#4169E1]">Special Services</span> for Your <br />
          Business <span className="text-[#4169E1]">Development</span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <article
            key={idx}
            className="bg-[#1a1a2e] p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#4169E1]"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
          </article>
        ))}
      </div>

      {/* Educational Services */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Educational Services</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Explore online classes, training resources, and consulting services provided by Nwafor Ugochukwu.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#4169E1] mb-2">Online Classes</h3>
            <p className="text-gray-300">
              Enroll in live sessions on frontend, backend, and fullstack development with practical hands-on training.
            </p>
          </div>
          <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#4169E1] mb-2">Consulting</h3>
            <p className="text-gray-300">
              Get personalized guidance on software architecture, business automation, and team mentorship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}