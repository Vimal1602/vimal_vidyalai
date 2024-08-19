// contexts/WindowWidthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a Context for window width
const WindowWidthContext = createContext();

// Provider component
export const WindowWidthProvider = ({ children }) => {
  const [isSmallerDevice, setIsSmallerDevice] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerDevice(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <WindowWidthContext.Provider value={{ isSmallerDevice }}>
      {children}
    </WindowWidthContext.Provider>
  );
};

// Custom hook to use the WindowWidthContext
export const useWindowWidth = () => {
  const context = useContext(WindowWidthContext);
  if (context === undefined) {
    throw new Error('useWindowWidth must be used within a WindowWidthProvider');
  }
  return context;
};
