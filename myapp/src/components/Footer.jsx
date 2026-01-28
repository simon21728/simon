import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Social Media */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-800 hover:bg-yellow-400 p-3 rounded-full transition-all duration-300 text-white hover:text-gray-900"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-yellow-400 p-3 rounded-full transition-all duration-300 text-white hover:text-gray-900"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-yellow-400 p-3 rounded-full transition-all duration-300 text-white hover:text-gray-900"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-yellow-400 p-3 rounded-full transition-all duration-300 text-white hover:text-gray-900"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Sewmehon Electromechanical. All rights reserved.
      </div>
    </footer>
  );
}