export default function Certificate() {
  return (
    <section
      id="certificate"
      className="min-h-screen bg-gradient-to-r from-purple-50 via-indigo-50 to-teal-50 scroll-mt-20 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 text-center">
          Chứng chỉ quốc tế về công nghệ & khoa học dữ liệu
        </h2>

        <ul className="list-disc list-inside text-gray-700 text-sm space-y-3 px-4">
          <li>
            edX Verified Certificate for Analyzing and Visualizing Data with Power BI (2017)
          </li>
          <li>
            Tools for Data Science (Coursera, 6/2021 & 7/2021)
          </li>
          <li>
            Data Science Orientation (Coursera, 6/2021)
          </li>
          <li>
            Data Science Methodology (Coursera, 7/2021)
          </li>
          <li>
            Databases and SQL for Data Science (Coursera, 8/2021)
          </li>
        </ul>
      </div>
    </section>
  );
}

