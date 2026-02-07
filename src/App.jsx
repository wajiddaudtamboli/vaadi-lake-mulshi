import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Lifestyle from './pages/Lifestyle';
import Contact from './pages/Contact';
import BookMeeting from './pages/BookMeeting';
import FloatingContactButtons from './components/FloatingContactButtons/FloatingContactButtons';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <FloatingContactButtons />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-meeting" element={<BookMeeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
