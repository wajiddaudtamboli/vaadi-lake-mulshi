import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Lifestyle from './pages/Lifestyle';
import Contact from './pages/Contact';
import FloatingContactButtons from './components/FloatingContactButtons/FloatingContactButtons';
import BookMeetingModal from './components/BookMeetingModal';
import { BookMeetingProvider, useBookMeeting } from './context/BookMeetingContext';
import './styles/global.css';

function AppContent() {
  const { isOpen, closeModal } = useBookMeeting();
  
  return (
    <>
      <FloatingContactButtons />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BookMeetingModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <BookMeetingProvider>
        <AppContent />
      </BookMeetingProvider>
    </BrowserRouter>
  );
}

export default App;
