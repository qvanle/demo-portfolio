import projectLinks from "../constants/projectLinks";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-r from-purple-50 via-indigo-50 to-teal-50 scroll-mt-20 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-5xl rounded-3xl p-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 text-center">
          Topics & Dự án
        </h2>

        <div className="space-y-8 text-gray-800 text-sm">
          {projectLinks.map((group, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-purple-700 mb-3">
                {index + 1}. {group.category}
              </h3>
              <ul className="list-decimal list-inside ml-4 space-y-2">
                {group.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

