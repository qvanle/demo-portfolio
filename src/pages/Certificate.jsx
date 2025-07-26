import { CircleDot } from "lucide-react";
import { motion } from "framer-motion";

export default function Certificate() {
  const certificates = [
    {
      title: "edX Verified Certificate for Analyzing and Visualizing Data with Power BI",
      date: "2017",
    },
    {
      title: "Tools for Data Science (Coursera)",
      date: "6/2021 & 7/2021",
    },
    {
      title: "Data Science Orientation (Coursera)",
      date: "6/2021",
    },
    {
      title: "Data Science Methodology (Coursera)",
      date: "7/2021",
    },
    {
      title: "Databases and SQL for Data Science (Coursera)",
      date: "8/2021",
    },
  ];

  return (
    <section
      id="certificate">
      <div className="min-h-screen flex flex-col items-center justify-center px-6 scroll-mt-20 bg-gradient-to-r from-white via-purple-50 to-teal-50">

      <div className="w-full max-w-4xl bg-transparent backdrop-blur-lg rounded-3xl p-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-16">
          Chứng chỉ quốc tế về công nghệ & khoa học dữ liệu
        </h2>

        <div className="space-y-10">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-[40px_1fr] gap-6 relative group"
            >
              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full border-4 border-indigo-500 p-[2px] z-10 shadow-md">
                  <CircleDot className="w-5 h-5 text-indigo-600" />
                </div>
                {idx !== certificates.length - 1 && (
                  <div className="flex-1 w-px bg-gradient-to-b from-indigo-400 to-indigo-200 mt-1" />
                )}
              </div>

              {/* Certificate Content */}
              <div className="bg-white/90 border border-indigo-100 rounded-xl p-5 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-indigo-700 text-lg leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
        </div>
    </section>
  );
}

