import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Navigation from './components/Navigation';
import { Button } from './components/ui/button';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <Navigation />
        </header>
        <main>
          <Router />
        </main>
        <footer className="py-12 bg-[#0A1633] text-white">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
