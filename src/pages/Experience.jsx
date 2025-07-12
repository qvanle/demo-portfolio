import expImg from "../assets/experience.png"; // export a collage of the 3 images as one

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-r from-purple-50 via-indigo-50 to-teal-50 scroll-mt-20 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        
        {/* Left: Experience Image */}
        <div className="flex justify-center items-center">
          <img
            src={expImg}
            alt="Trần Kim Duy Lân Leadership Experience"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right: Textual Experience */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
            Kinh nghiệm lãnh đạo
          </h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Vị trí lãnh đạo hiện tại:
          </h3>

          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed list-disc list-inside">
            <li>
              <strong>Giám đốc Quốc gia tại Navagis</strong> – Đối tác chiến lược của Google với hơn 20 năm kinh nghiệm
            </li>
            <li>
              <strong>Đối tác phát triển Chương trình Tăng tốc</strong> tại Quỹ Đầu tư Expara
            </li>
            <li>
              <strong>Giám đốc Kinh doanh</strong> tại Unitex: Công ty tư vấn giải pháp AI và Blockchain cho doanh nghiệp
            </li>
            <li>
              <strong>Founder</strong> của OffChain Saigon – Cộng đồng blockchain tại Việt Nam
            </li>
            <li>
              <strong>Giảng viên Khoa Tài chính Thương mại</strong> tại Đại học HUTECH
            </li>
            <li>
              <strong>Diễn giả & Cố vấn Khởi nghiệp</strong> cho các cuộc thi và chương trình đổi mới sáng tạo
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

