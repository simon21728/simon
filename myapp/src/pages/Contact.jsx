import { useState } from "react";
import { contactData } from "../data/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-3 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <input
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-3 border rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-600 font-bold">
            Message sent successfully!
          </p>
        )}

        <div className="mt-6">
          <p>Email: {contactData.email}</p>
          <p>Phone: {contactData.phone}</p>
          <p>Address: {contactData.address}</p>
        </div>
      </div>
    </div>
  );
}