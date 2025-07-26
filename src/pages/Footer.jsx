import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-100 via-indigo-100 to-teal-100 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

        {/* Logo or Title */}
        <div>
          <h1 className="text-xl font-bold text-blue-900">Trần Kim Duy Lân</h1>
          <p className="text-xs text-gray-600 mt-1">
          Chuyên gia Công nghệ & Đổi mới Sáng tạo
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-base font-semibold text-blue-900 mb-1">Navigation</h2>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-base font-semibold text-blue-900 mb-1">Contact</h2>
          <div className="flex items-center space-x-2 mb-1">
            <FaEnvelope className="text-yellow-600" />
            <a href="mailto:lankimduytran@gmail.com" className="hover:underline text-xs">
              lankimduytran@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-blue-700" />
            <a
              href="https://linkedin.com/in/lankimduytran"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-xs"
            >
              linkedin.com/in/lankimduytran
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-300 py-2">
        &copy; {new Date().getFullYear()} Trần Kim Duy Lân. All rights reserved.
      </div>
    </footer>
  );
}

