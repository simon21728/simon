import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }

      await response.json();
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Check console for details.");
    }
  };

  const latitude = 9.03;
  const longitude = 38.74;

  return (
    <section className="w-screen min-h-screen flex flex-col justify-start lg:justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-16 py-16">
      <div className="w-full max-w-5xl flex flex-col gap-12">

        {/* Map */}
        <div className="w-full h-72 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Company Location"
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center">Contact Us</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-transform transform hover:scale-105 shadow-md"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className={`text-center font-semibold ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
              {status}
            </p>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-lg gap-6 text-center sm:text-left">
          <div>
            <strong>Email:</strong>{" "}
            <a href="mailto:bayusewmehon@gmail.com" className="text-blue-600 hover:underline">
              bayusewmehon@gmail.com
            </a>
          </div>
          <div>
            <strong>Phone:</strong>{" "}
            <a href="tel:0920763944" className="text-blue-600 hover:underline">
              0920763944
            </a>
          </div>
          <div>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/sewmehon-bayu-96131b162/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;