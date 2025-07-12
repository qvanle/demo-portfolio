import { useState, useEffect } from "react";
import navLinks from "../constants/navLinks";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  // Update active link based on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex flex-wrap justify-center gap-4 p-4 text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              activeSection === link.id
                ? "bg-purple-500 text-white"
                : `text-black ${link.hoverColor}`
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

