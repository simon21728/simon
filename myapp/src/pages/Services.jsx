import { servicesData } from "../data/data";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-bold mb-2">{s.name}</h2>
            <p>{s.desc}</p>
          </div>
          
        ))}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Residential, commercial, and industrial wiring
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Electrical system design and installation
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Power distribution and control systems
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Electrical maintenance and troubleshooting
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
           
          </h2>
          <p className="text-gray-600 leading-relaxed">
           Solar power and renewable energy systems
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            
            
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Electrical safety inspection and compliance
          </p>
        </div>
      </div>
    </div>
  );
}