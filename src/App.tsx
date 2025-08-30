import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;