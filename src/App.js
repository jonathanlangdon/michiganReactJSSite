import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Lansing from './components/Lansing';
import GrandRapids from './components/GrandRapids';
import Detroit from './components/Detroit';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lansing" element={<Lansing />} />
          <Route path="/grand-rapids" element={<GrandRapids />} />
          <Route path="/detroit" element={<Detroit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
