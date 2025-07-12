import React from 'react';


import NavBar from './components/NavBar'; 

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Awards from "./pages/Awards";
import Consultancy from "./pages/Consultancy";
import Activity from "./pages/Activity";
import Certificate from "./pages/Certificate";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="scroll-smooth">
      <NavBar />
        <Home />

        <About />

        <Experience />

        <Awards />

        <Consultancy />
    
        <Activity />

        <Certificate />
        
        <Projects />

        <Contact />

    </div>
  );
}

export default App;
