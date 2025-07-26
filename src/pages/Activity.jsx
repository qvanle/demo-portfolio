import activityImg from "../assets/activity.png";

export default function Activity() {
  return (
    <section
      id="activity"
    >
      <div className="min-h-screen flex flex-col items-center justify-center px-6 scroll-mt-20 bg-gradient-to-r from-white via-purple-50 to-teal-50">

      <div className="w-full max-w-6xl bg-transparent rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center">
        
        {/* Left: Timeline content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-600 mb-6">
            Hoạt động gần đây &<br />Định hướng tương lai
          </h2>

          {/* Timeline */}
          <div className="pl-4 ml-1 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sự kiện & Hội thảo</h3>
              <ul className="mt-2 space-y-4 text-sm text-gray-700">
                <li className="relative before:absolute before:-left-5 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-purple-400">
                  <strong>2025:</strong> Workshop “Nhà Quản trị Tương lai” – ĐH Hùng Vương TP.HCM
                </li>
                <li className="relative before:absolute before:-left-5 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-purple-400">
                  <strong>2024:</strong> Hội thảo “Blockchain – AI và xu hướng kinh tế” – HUTECH
                </li>
                <li className="relative before:absolute before:-left-5 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-purple-400">
                  <strong>2023:</strong> Chương trình GIS trong quản lý đất đai – TP.HCM
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Tầm nhìn 2025–2030</h3>
              <ul className="mt-2 space-y-4 text-sm text-gray-700">
                <li className="relative before:absolute before:-left-5 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-indigo-400">
                  Mở rộng hệ sinh thái OffChain ra khu vực Đông Nam Á
                </li>
                <li className="relative before:absolute before:-left-5 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-indigo-400">
                  Phát triển các sản phẩm AI thực tế cho thị trường Việt Nam
                </li>
                <li className="relative before:absolute before:-left-5 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-indigo-400">
                  Xây dựng cầu nối công nghệ Việt Nam – quốc tế
                </li>
              </ul>
            </div>
          </div>
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
      </div>
    </section>
  );
}

