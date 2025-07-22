import { useState, useEffect } from "react";
import { Sparkle } from "lucide-react";
import navLinks from "../constants/navLinks";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex items-center justify-center px-2 py-2 sm:py-4 sm:px-4">
        <div className="hidden sm:flex flex-wrap justify-center gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-3 py-1.5 rounded-md transition-colors duration-200 ${
                activeSection === link.id
                  ? "bg-purple-500 text-white"
                  : `text-black ${link.hoverColor}`
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Logo */}
        <div className="flex sm:hidden items-center justify-center w-full">
          <Sparkle className="w-5 h-5 text-purple-500" />
        </div>
      </div>
    </nav>
  );
}

