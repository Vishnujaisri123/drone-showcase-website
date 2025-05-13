import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { ProductGallerySection } from './components/sections/ProductGallerySection';
import { DemoSection } from './components/sections/DemoSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 text-dark-900 dark:text-white overflow-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <ProductGallerySection />
          <DemoSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;