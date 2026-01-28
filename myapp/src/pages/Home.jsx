import { useState } from "react";
import { homeData } from "../data/data";

const pages = [
  {
    title: "Welcome to Our Company",
    content: `Welcome to Sewmehon Electromechanical General Trading, a trusted
    leader in electrotechnical solutions and general trading. We deliver
    high-quality products, reliable services, and innovative solutions
    across Ethiopia. Our experienced team ensures every project is
    executed with precision, professionalism, and integrity.`,
  },
  {
    title: "Established in 2018",
    content: `Since 2018, we have grown into a trusted partner for businesses
    and individuals across Ethiopia. Guided by integrity,
    professionalism, and customer satisfaction, we continue to
    deliver innovative and reliable electromechanical solutions.`,
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="w-screen min-h-screen flex flex-col justify-start lg:justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-16 py-16">

      {/* HERO HEADER */}
      <div className="w-full text-center mb-16 lg:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6">
          {homeData.title}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
          {homeData.description}
        </p>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">

        {/* IMAGE SECTION */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src={homeData.image}
            alt="Visual representation of the company’s services and brand"
            className="
              w-full
              h-[260px] sm:h-[360px] md:h-[480px] lg:h-[620px]
              object-cover
              group-hover:scale-110
              transition-transform duration-700
            "
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
            <p className="w-full text-center text-white px-6 sm:px-12 py-6 text-sm sm:text-base md:text-lg font-semibold">
              Sewmehon Bayu,{" "}
              <span className="text-yellow-400 text-lg md:text-xl underline decoration-2 decoration-yellow-400">
                Manager
              </span>{" "}
              of the Company
            </p>
          </div>
        </div>

        {/* PAGINATED TEXT CONTENT */}
        <div className="space-y-10 max-w-xl mx-auto lg:mx-0">

          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg
                          hover:shadow-2xl hover:-translate-y-2
                          transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">
              {pages[currentPage].title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {pages[currentPage].content}
            </p>
          </div>

          {/* PAGINATION CONTROLS */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
              disabled={currentPage === 0}
              className="px-6 py-2 rounded-full bg-gray-800 text-white
                         disabled:opacity-40 hover:bg-gray-700 transition"
            >
              Previous
            </button>

            <span className="text-gray-700 font-semibold">
              {currentPage + 1} / {pages.length}
            </span>

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, pages.length - 1))
              }
              disabled={currentPage === pages.length - 1}
              className="px-6 py-2 rounded-full bg-gray-800 text-white
                         disabled:opacity-40 hover:bg-gray-700 transition"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}