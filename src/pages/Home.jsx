import avatar from "../assets/avatar.png";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-white via-purple-50 to-teal-50 scroll-mt-20 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-12">
        {/* Left text content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Xin chào, tôi là <br />
            <span className="text-purple-600">Trần Kim Duy Lân</span>
            <br />
            <span className="text-purple-600"> (Leo Tran)</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            Chuyên gia Công nghệ & Đổi mới Sáng tạo
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl text-lg md:text-xl">
            <strong>Kết nối - Phát triển - Truyền cảm hứng</strong>
          </p>

          <a href="#contact">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-md shadow transition">
              Kết nối ngay
            </button>
          </a>
        </div>
        
        <div className="flex justify-center">
          <img
            src={avatar}
            alt="Trần Kim Duy Lân"
            className="w-72 h-auto rounded-2xl shadow-lg object-cover transform md:scale-150 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

