import React from 'react';
import './App.css';

import Navegador from './components/Navegador';
import Products from './components/Products';
import Contact from './components/Contact';
import Making from './components/Making';
import About from './components/About';

function App() {
  

  return (
    <div>
    <Navegador></Navegador> 
    <div className="sections-container">
        <section id="about-section" className="section">
          <About />
        </section>
        <section id="products-section" className="section">
          <Products />
        </section>
        <section id="making-section" className="section">
          <Making />
        </section>
        <section id="contact-section" className="section">
          <Contact />
        </section>
      </div>   
    </div>
  );
}

export default App;
