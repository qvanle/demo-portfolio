import avatar from "../assets/avatar.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 scroll-mt-20 bg-gradient-to-r from-white via-purple-50 to-teal-50"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        {/* Left: avatar with social icons */}
        <div className="flex flex-col items-center justify-center relative">
          <img
            src={avatar}
            alt="Trần Kim Duy Lân"
            className="w-96 h-auto rounded-2xl shadow-lg object-cover transform md:scale-130 transition-transform duration-300"
          />

          {/* Social media bar */}
          <div className="absolute -bottom-6 bg-white px-4 py-2 rounded-lg shadow flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/lankimduytran" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700">
              <FaLinkedinIn />
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700">
              <FaBehance />
            </a>
          </div>
        </div>

        {/* Right: Education content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Học vấn
          </h2>

          <div className="mb-6">
            <p className="text-lg font-semibold text-purple-600">
              RMIT Vietnam University
            </p>
            <p className="text-sm text-gray-600">2011 - 2014</p>
            <p className="text-sm text-gray-700 italic">Cử nhân Kinh doanh (Kế toán)</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-purple-600">
              Copenhagen Business School
            </p>
            <p className="text-sm text-gray-600">2014 - 2016</p>
            <p className="text-sm text-gray-700 italic">Thạc sĩ Khoa học (Kinh Doanh Quốc Tế)</p>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex gap-4">
            <a href="#projects">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-md shadow">
                Dự án
              </button>
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <button className="border border-purple-500 text-purple-600 hover:bg-purple-100 font-semibold px-6 py-2 rounded-md shadow">
                Tải CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

