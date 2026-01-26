import { servicesData } from "../data/data";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We deliver reliable, innovative, and professional electromechanical
          solutions tailored to your needs.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-2xl p-8 shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition-all duration-300"
          >
            {/* ICON */}
            <div className="text-5xl mb-4">
              {service.icon}
            </div>

            {/* TITLE */}
            <h2 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition">
              {service.name}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}