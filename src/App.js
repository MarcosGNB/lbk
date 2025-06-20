import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import MapSection from './components/MapSection';
import PriceSection from './components/PriceSection'; // Importar el nuevo componente
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para manejar la navegación

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <AboutSection />
            <GallerySection />
            <PriceSection /> {/* Añadir el componente PriceSection aquí */}
            <MapSection />
            <Footer />
          </>
        );
      default:
        return (
          <>
            <HeroSection />
            <AboutSection />
            <GallerySection />
            <PriceSection /> {/* Añadir el componente PriceSection aquí */}
            <MapSection />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {renderPage()}
    </div>
  );
};

export default App;

// DONE