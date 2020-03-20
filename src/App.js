import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import About from './Components/About'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Skills from './Components/Skills'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid p-0">
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
      </div>
    </div>
  );
}

export default App;
