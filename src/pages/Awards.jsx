import img1 from "../assets/award1.png"; // L'Oreal Brandstorm
import img2 from "../assets/award2.png"; // InnoEx
import img3 from "../assets/award3.png"; // Antler presentation

export default function Awards() {
  return (
    <section
      id="awards"
      className="min-h-screen bg-gradient-to-r from-purple-50 via-indigo-50 to-teal-50 scroll-mt-20 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        
        {/* Left: Achievement text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
            Thành tựu nổi bật
          </h2>

          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed list-disc list-inside">
            <li>
              Diễn giả, điều phối viên và tổ chức các chương trình chuyên đổi số tại nhiều trường đại học, tập trung vào blockchain, Web3 và định hướng nghề nghiệp thực tiễn.
            </li>
            <li>
              Chủ trì thảo luận, giải đáp thắc mắc, truyền đạt kiến thức Web3 để truyền cảm hứng cho sinh viên khám phá công nghệ mới.
            </li>
            <li>
              Giám khảo & mentor các cuộc thi khởi nghiệp sinh viên (L'Oréal 2023, 2025, VSIC 2023).
            </li>
            <li>
              Kinh nghiệm hỗ trợ startup mở rộng quy mô, phát triển sản phẩm, kết nối nhà đầu tư.
            </li>
            <li>
              Diễn giả & cố vấn khởi nghiệp cho cộng đồng doanh nghiệp công nghệ tại Việt Nam.
            </li>
            <li>
              Đại diện trình bày giải pháp tại sự kiện lớn (GIS TP.HCM, Navagis...).
            </li>
            <li>
              Đào tạo, tư vấn cho doanh nghiệp và lãnh đạo trong đổi mới sáng tạo.
            </li>
            <li>
              Chuyên môn blockchain, DeFi, NFT, Metaverse, Web3, AI & chuyển đổi số.
            </li>
            <li>
              Tham gia phát triển nội dung giáo dục & thương hiệu với EdBase.AI.
            </li>
          </ul>
        </div>

        {/* Right: Images grid */}
        <div className="grid grid-cols-2 gap-4 items-start">
          <img src={img1} alt="L'Oreal Award" className="rounded-xl shadow-md col-span-2" />
          <img src={img2} alt="InnoEx Forum" className="rounded-xl shadow-md" />
          <img src={img3} alt="Antler Presentation" className="rounded-xl shadow-md" />
        </div>
      </div>
    </section>
  );
}

