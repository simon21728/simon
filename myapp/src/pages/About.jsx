import { aboutData } from "../data/data";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{aboutData.title}</h1>
        <p className="text-lg mb-6">{aboutData.description}</p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Electrical & Computer Engineering Contractor
          </h2>
          <p className="text-gray-600 leading-relaxed">
            About Us: We are a professional Electrical and Computer Engineering contracting company 
            committed to delivering reliable, efficient, and innovative engineering solutions. With years 
            of hands-on experience, we provide high-quality services to residential, commercial, and industrial clients. 
            Our expertise covers electrical installations, power systems, computer networking, and modern automation 
            technologies. We focus on safety, precision, and customer satisfaction in every project we undertake.
             By combining engineering excellence with practical solutions, we help our clients achieve dependable systems 
             that meet international standards and modern technological demands.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To provide safe, efficient, and sustainable electrical and computer engineering solutions that 
            exceed client expectations.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To become a trusted engineering contractor known for quality workmanship, 
            innovation, and integrity.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Qualified and experienced engineers High safety and quality standards Reliable project delivery 
            Professional technical support
          </p>
        </div>

        <a
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          href={aboutData.pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          See Resume
        </a>
      </div>
    </div>
  );
}