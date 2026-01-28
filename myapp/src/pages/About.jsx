import { aboutData } from "../data/data";

export default function About() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-16 py-16">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
            {aboutData.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            {aboutData.description}
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div className="space-y-10">

            {/* ABOUT */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Electrical & Computer Engineering Contractor
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are a professional Electrical and Computer Engineering contracting company
                committed to delivering reliable, efficient, and innovative solutions.
                Our expertise spans electrical installations, power systems, computer networking,
                and modern automation technologies. We prioritize safety, precision, and
                customer satisfaction in every project we undertake.
              </p>
            </div>

            {/* WHY CHOOSE US */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Why Choose Us?
              </h2>
              <ul className="space-y-3 text-gray-600 list-disc list-inside">
                <li>Qualified & experienced engineers</li>
                <li>High safety and quality standards</li>
                <li>Reliable project delivery</li>
                <li>Professional technical support</li>
              </ul>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10">

            {/* MISSION */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To provide safe, efficient, and sustainable electrical and computer
                engineering solutions that exceed client expectations.
              </p>
            </div>

            {/* VISION */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted engineering contractor recognized for quality
                workmanship, innovation, and integrity.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <a
                href={aboutData.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full
                           font-semibold shadow-lg hover:bg-blue-700 hover:scale-105
                           transition-all duration-300"
              >
                View Company Profile
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}