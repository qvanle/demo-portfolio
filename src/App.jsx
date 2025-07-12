import React from 'react';


import NavBar from './components/NavBar'; 

import Home from "./pages/Home";

function App() {
  return (
    <div className="scroll-smooth">
      <NavBar />
        <Home />

      <section id="about" className="min-h-screen bg-green-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">About</h2>
      </section>

      <section id="experience" className="min-h-screen bg-orange-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Experience</h2>
      </section>

      <section id="awards" className="min-h-screen bg-purple-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Awards</h2>
      </section>

      <section id="consultancy" className="min-h-screen bg-pink-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Consultancy</h2>
      </section>

      <section id="activity" className="min-h-screen bg-indigo-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Activity</h2>
      </section>

      <section id="certificate" className="min-h-screen bg-lime-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Certificate</h2>
      </section>

      <section id="projects" className="min-h-screen bg-cyan-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Projects</h2>
      </section>

      <section id="contact" className="min-h-screen bg-yellow-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Contact</h2>
      </section>
    </div>
  );
}

export default App;
