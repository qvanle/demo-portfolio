import contactImg from "../assets/contact.png";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-purple-50 via-indigo-50 to-teal-50 scroll-mt-20 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center">
        
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={contactImg}
            alt="Trần Kim Duy Lân tại Eiffel"
            className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Right: Contact Details */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Connect <span className="font-light text-gray-700">With Me</span>
          </h2>

          <div className="flex items-center space-x-4 text-gray-700">
            <FaPhoneAlt className="text-yellow-600" />
            <span className="font-semibold">0908310791</span>
          </div>

          <div className="flex items-center space-x-4 text-gray-700">
            <FaEnvelope className="text-yellow-600" />
            <span className="font-semibold">lankimduytran@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4 text-gray-700">
            <FaLinkedin className="text-blue-700" />
            <a
              href="https://linkedin.com/in/lankimduytran"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/lankimduytran
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

