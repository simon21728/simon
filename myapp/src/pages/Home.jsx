import { homeData } from "../data/data";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {homeData.title}
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {homeData.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={homeData.image}
            alt="Company"
            className="w-full h-80 object-cover"
          />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Our Company
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Sewmehon Electromechanical General Trading, a trusted leader in electrotechnical solutions 
            and general trading. We are dedicated to providing high-quality products, reliable services, and innovative 
            solutions to meet the diverse needs of our clients across Ethiopia. Our company combines technical expertise with 
            a commitment to excellence, ensuring that every project we undertake is executed with precision and professionalism. 
            Whether you are looking for cutting-edge electrical systems, electromechanical equipment, or comprehensive technical 
            support, our experienced team is here to deliver results that exceed expectations. At Sewmehon Electrotechnical, we 
            value integrity, innovation, and customer satisfaction, making us a dependable partner for all your electrotechnical
             needs.
          </p>
        </div>
        
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Established in 2018
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Since our establishment in 2018, Sewmehon Electromechanical General Trading has been committed to providing
             top-quality electrotechnical solutions and general trading services across Ethiopia. Over the years, we have grown 
             into a trusted partner for businesses and individuals alike, delivering innovative, reliable, and efficient solutions
              that meet the highest industry standards. Our team of skilled professionals combines technical expertise with 
              a dedication to excellence, ensuring that every project is executed with precision and care. Guided by our core 
              values of integrity, professionalism, and customer satisfaction, we continue to expand our services while maintaining
               strong relationships with our clients and partners.
          </p>
        </div>
      </div>
    </section>
  );
}