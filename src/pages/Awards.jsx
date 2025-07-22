import img1 from "../assets/award1.png"; // L'Oreal Brandstorm
import img2 from "../assets/award2.png"; // InnoEx
import img3 from "../assets/award3.png"; // Antler presentation

export default function Awards() {
  return (
    <section id="awards"> 
      <div className="flex flex-col items-center justify-center px-6 scroll-mt-20 bg-gradient-to-r from-white via-purple-50 to-teal-50">
      <div className="mb-12">
        <div
          className="text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <p className="text-gray-600 uppercase tracking-wide">qualification</p>
          <h2 className="text-3xl font-bold">
            <span className="text-primary text-purple-500">Achievements</span>
          </h2>
        </div>

        {/* Updated layout with vertical line */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-2">
          {/* Education Timeline */}
          <div
            className="flex-1"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <div className="bg-transparent rounded-lg p-6 h-full">
              <ul className="timeline space-y-6">
                <li data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="mb-1 text-sm text-gray-500">Ongoing</div>
                    <h5 className="text-lg font-bold">
                      Diễn giả & Điều phối chương trình
                      <span className="block text-sm font-medium text-gray-500">
                        - Blockchain, Web3, hướng nghiệp
                      </span>
                    </h5>
                    <p className="text-gray-600 mt-2">
                      Tổ chức tại nhiều trường đại học, truyền cảm hứng và chia sẻ kiến thức thực tiễn về công nghệ mới.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="mb-1 text-sm text-gray-500">2023 - 2025</div>
                    <h5 className="text-lg font-bold">
                      Giám khảo & Mentor khởi nghiệp
                      <span className="block text-sm font-medium text-gray-500">
                        - L’Oréal Brandstorm, VSIC
                      </span>
                    </h5>
                    <p className="text-gray-600 mt-2">
                      Đồng hành cùng sinh viên trong các cuộc thi đổi mới sáng tạo và khởi nghiệp.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="mb-1 text-sm text-gray-500">Ongoing</div>
                    <h5 className="text-lg font-bold">
                      Đào tạo & Tư vấn doanh nghiệp
                      <span className="block text-sm font-medium text-gray-500">
                        - Đổi mới sáng tạo
                      </span>
                    </h5>
                    <p className="text-gray-600 mt-2">
                      Cố vấn cho lãnh đạo và doanh nghiệp về chiến lược phát triển công nghệ và chuyển đổi số.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Vertical separator line */}
          <div className="hidden lg:block w-px bg-gray-400 mx-4"></div>

          {/* Experience Timeline */}
          <div
            className="flex-1"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <div className="bg-transparent rounded-lg p-6 h-full">
              <ul className="timeline space-y-6">
                <li data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="mb-1 text-sm text-gray-500">Navagis, GIS HCM</div>
                    <h5 className="text-lg font-bold">
                      Đại diện trình bày giải pháp
                      <span className="block text-sm font-medium text-gray-500">
                        - Hội nghị quốc tế
                      </span>
                    </h5>
                    <p className="text-gray-600 mt-2">
                      Chia sẻ sáng kiến chuyển đổi số tại sự kiện công nghệ quy mô lớn.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="mb-1 text-sm text-gray-500">EdBase.AI</div>
                    <h5 className="text-lg font-bold">
                      Cố vấn nội dung giáo dục
                      <span className="block text-sm font-medium text-gray-500">
                        - Phát triển thương hiệu
                      </span>
                    </h5>
                    <p className="text-gray-600 mt-2">
                      Tham gia xây dựng nội dung học tập và sản phẩm công nghệ giáo dục.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="mb-1 text-sm text-gray-500">Blockchain, Web3, AI</div>
                    <h5 className="text-lg font-bold">
                      Chuyên gia công nghệ mới
                      <span className="block text-sm font-medium text-gray-500">
                        - Đào tạo & diễn giả
                      </span>
                    </h5>
                    <p className="text-gray-600 mt-2">
                      Chia sẻ chuyên môn về DeFi, NFT, Metaverse, Web3 và AI trong cộng đồng công nghệ.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

