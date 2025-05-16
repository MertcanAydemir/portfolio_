import React, { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';

function App() {
  // Metadata ekleme
  useEffect(() => {
    document.title = "Mertcan Aydemir - Portfolyo";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Mertcan Aydemir kişisel portfolyo web sitesi. Web geliştirme ve bilgisayar mühendisliği projeleri.");
    }
  }, []);

  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}

export default App;