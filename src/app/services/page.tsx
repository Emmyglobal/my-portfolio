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
      'Modern and mobile-ready website that will help you reach all of your marketing.',
  },
  {
    icon: <FaPaintBrush size={30} className="text-[#4169E1]" />,
    title: 'UI/UX Design',
    description:
      'Create intuitive interfaces and delightful user experiences by blending aesthetics with usability.',
  },
  {
    icon: <FaMobileAlt size={30} className="text-[#4169E1]" />,
    title: 'App Development',
    description:
      'Modern and mobile-ready application that will help you reach all of your marketing.',
  },
  {
    icon: <FaCogs size={30} className="text-[#4169E1]" />,
    title: 'API Design / Integration',
    description:
      'Developing a highly secure, fast and scalable APIs both REST and GraphQL.',
  },
  {
    icon: <FaCreditCard size={30} className="text-[#4169E1]" />,
    title: 'Payment Integration',
    description:
      'Automate the process of payments to allow users pay right on your platform.',
  },
  {
    icon: <FaUserFriends size={30} className="text-[#4169E1]" />,
    title: 'Mentorship',
    description:
      'Finds great joy in sharing my knowledge with others. As a technical mentor this allows me to give back to the community.',
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-[#0a0a23] text-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
          I like to make things easy and fun
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-[#4169E1]">Special Services</span> For your <br />
          Business <span className="text-[#4169E1]">Development</span>
        </h2>
      </div>

      {/* Special Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a2e] p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Educational Services Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Educational Services</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Explore online classes, training resources, and consulting services provided by Nwafor Ugochukwu.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#4169E1] mb-2">
              Online Classes
            </h3>
            <p className="text-gray-300">
              Enroll in live sessions on frontend, backend, and fullstack development.
            </p>
          </div>
          <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#4169E1] mb-2">
              Consulting
            </h3>
            <p className="text-gray-300">
              Get professional guidance on software architecture and business automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
