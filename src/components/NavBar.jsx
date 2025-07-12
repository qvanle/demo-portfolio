import { useState } from "react";


import navLinks from "../constants/navLinks";

export default function NavBar() {
    const [active, setActive] = useState("home");

    
    return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex flex-wrap justify-center gap-4 p-4 text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              active === link.id
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
