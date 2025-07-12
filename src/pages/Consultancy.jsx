export default function Consultancy() {
  return (
    <section
      id="consultancy"
      className="min-h-screen bg-gradient-to-r from-purple-50 via-indigo-50 to-teal-50 scroll-mt-20 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 text-center">
          Chuyên môn & Dịch vụ hợp tác
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-sm leading-relaxed">
          {/* Left: Lĩnh vực chuyên sâu */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-3">
              Lĩnh vực chuyên sâu
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Blockchain & Web3: DeFi, NFT, Smart Contracts, Metaverse</li>
              <li>Trí tuệ nhân tạo: Machine Learning, Gen AI, AI Marketing</li>
              <li>Chuyển đổi số: Digital Transformation, Business Process Optimization</li>
              <li>Khởi nghiệp & Đầu tư: Startup Mentoring, Business Development</li>
            </ul>
          </div>

          {/* Right: Dịch vụ tư vấn */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-3">
              Dịch vụ tư vấn
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Phát triển chiến lược công nghệ cho doanh nghiệp</li>
              <li>Đào tạo và nâng cao năng lực số cho tổ chức</li>
              <li>Cố vấn khởi nghiệp và phát triển sản phẩm công nghệ</li>
              <li>Kết nối và phát triển mạng lưới đối tác quốc tế</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

