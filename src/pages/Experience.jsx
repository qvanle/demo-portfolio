import {
  Globe,
  Handshake,
  LineChart,
  Rocket,
  GraduationCap,
  Mic,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience">
      <div className="flex flex-col items-center justify-center px-6 scroll-mt-20 bg-gradient-to-r from-white via-purple-50 to-teal-50">

        <div className="w-full max-w-6xl mx-auto py-12">
          <h3 className="text-center text-lg font-medium text-gray-500 mb-2">
            LEADERSHIP INSIGHTS 
          </h3>
          <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-10">
            <span className="text-purple-500">Kinh Nghiệm Lãnh Đạo</span>
          </h2>

          {/* Scrollable 2-Row Card Container */}
          <div className="overflow-x-auto scrollbar-hide flex justify-center">
            <div className="flex flex-wrap gap-x-6 gap-y-6 min-w-max w-fit pb-4">
              <div className="flex flex-col items-center justify-center space-y-6 mb-6">
              {/* Card 1 */}
              <div className="w-[300px] h-[240px] flex-shrink-0 bg-white border border-gray-100 shadow-xl rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Globe className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Giám đốc Quốc gia tại Navagis
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Đối tác chiến lược của Google với hơn 20 năm kinh nghiệm.
                </p>
              </div>

              {/* Card 2 */}
              <div className="w-[300px] h-[240px] flex-shrink-0 bg-white border border-gray-100 shadow-xl rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Handshake className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Đối tác Quỹ Đầu tư Expara
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Đối tác phát triển Chương trình Tăng tốc tại Quỹ Đầu tư Expara.
                </p>
              </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-6 mb-6">

              {/* Card 3 */}
              <div className="w-[300px] h-[240px] flex-shrink-0 bg-white border border-gray-100 shadow-xl rounded-2xl p-6 text-center">

                <div className="flex justify-center mb-4">
                  <LineChart className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Giám đốc Kinh doanh tại Unitex
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Công ty tư vấn giải pháp AI và Blockchain cho doanh nghiệp.
                </p>
              </div>

              {/* Card 4 */}
              <div className="w-[300px] h-[240px] flex-shrink-0 bg-white border border-gray-100 shadow-xl rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Rocket className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Founder của OffChain Saigon
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cộng đồng blockchain tại Việt Nam.
                </p>
              </div>

              </div>

              <div className="flex flex-col items-center justify-center space-y-6 mb-6">

              {/* Card 5 */}
              <div className="w-[300px] h-[240px] flex-shrink-0 bg-white border border-gray-100 shadow-xl rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <GraduationCap className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Giảng viên tại đại học HUTECH
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Giảng viên Khoa Tài chính Thương mại tại Đại học HUTECH.
                </p>
              </div>

              {/* Card 6 */}
              <div className="w-[300px] h-[240px] flex-shrink-0 bg-white border border-gray-100 shadow-xl rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Mic className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Diễn giả & Cố vấn Khởi nghiệp
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Diễn giả và cố vấn cho các cuộc thi và chương trình đổi mới sáng tạo.
                </p>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

