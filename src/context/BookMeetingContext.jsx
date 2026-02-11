import React, { createContext, useContext, useState, useCallback } from 'react';

const BookMeetingContext = createContext();

export const useBookMeeting = () => {
  const context = useContext(BookMeetingContext);
  if (!context) {
    throw new Error('useBookMeeting must be used within BookMeetingProvider');
  }
  return context;
};

export const BookMeetingProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <BookMeetingContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BookMeetingContext.Provider>
  );
};

export default BookMeetingContext;
