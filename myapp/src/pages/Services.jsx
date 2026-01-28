import { useState } from "react";
import { servicesData } from "../data/data";

const serviceImages = [
  { id: 1, src: "/images/Elevators.png", title: "Elevators" },
  { id: 2, src: "/images/BMS.png", title: "Building Management System" },
  { id: 3, src: "/images/Escalators .png", title: "Escalators" },
  { id: 4, src: "/images/Fire.png", title: "Fire Protection Systems" },
  { id: 5, src: "/images/Generators.png", title: "Generators" },
  { id: 6, src: "/images/HVAC.png", title: "HVAC Systems" },
  { id: 7, src: "/images/poles.png", title: "Electrical Poles" },
  { id: 8, src: "/images/Pumps.png", title: "Pumping Systems" },
  { id: 9, src: "/images/Wastewater.png", title: "Wastewater Treatment" },
];

export default function Services() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(servicesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = servicesData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-16 bg-gray-50">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-yellow-600 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto">
          Reliable, innovative, and professional electromechanical solutions
          designed for modern infrastructure.
        </p>
      </div>

      {/* IMAGE SHOWCASE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {serviceImages.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-56 sm:h-64 lg:h-72 object-cover 
                         group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t 
                            from-black/80 via-black/40 to-transparent
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            flex items-end">
              <h3 className="text-white text-lg md:text-xl font-semibold p-6">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentServices.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-3xl p-8 shadow-lg
                       hover:shadow-2xl hover:-translate-y-3
                       transition-all duration-300"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition">
              {service.icon}
            </div>

            <h2 className="text-xl font-semibold mb-3 text-gray-800 
                           group-hover:text-blue-600 transition">
              {service.name}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-4 mt-16">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-5 py-2 rounded-full bg-gray-800 text-white
                     disabled:opacity-40 hover:bg-gray-700 transition"
        >
          Prev
        </button>

        <span className="text-gray-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-5 py-2 rounded-full bg-gray-800 text-white
                     disabled:opacity-40 hover:bg-gray-700 transition"
        >
          Next
        </button>
      </div>
    </section>
  );
}