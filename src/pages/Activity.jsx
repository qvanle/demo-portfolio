import activityImg from "../assets/activity.png";

export default function Activity() {
  return (
    <section
      id="activity"
      className="min-h-screen bg-gradient-to-r from-purple-50 via-indigo-50 to-teal-50 scroll-mt-20 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center">
        
        {/* Left: Text content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
            Hoạt động gần đây &<br />Định hướng tương lai
          </h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Sự kiện & Hội thảo</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-6 space-y-2">
            <li>
              Workshop “Nhà Quản trị Tương lai” – Đại học Hùng Vương TP.HCM (2025)
            </li>
            <li>
              Hội thảo “Blockchain – AI và xu hướng kinh tế” – HUTECH (2024)
            </li>
            <li>
              Chương trình GIS trong quản lý đất đai – TP.HCM (2023)
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Tầm nhìn 2025–2030</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>
              Mở rộng hệ sinh thái OffChain ra khu vực Đông Nam Á
            </li>
            <li>
              Phát triển các sản phẩm AI thực tế cho thị trường Việt Nam
            </li>
            <li>
              Xây dựng cầu nối công nghệ Việt Nam – quốc tế
            </li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={activityImg}
            alt="Hoạt động gần đây - Trần Kim Duy Lân"
            className="w-72 h-auto rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

