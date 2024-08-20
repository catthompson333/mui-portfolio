import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';  // Importing Contact from pages directory
import Resume from './pages/Resume';
import Footer from './components/Footer';  // Assuming Footer is consistent across pages

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />  {/* Using the page-level Contact component */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />  {/* Footer is added here to be consistent across all pages */}
    </Router>
  );
}

export default App;
