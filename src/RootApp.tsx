import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Design2App from './designs/design2/App';
import Design3App from './designs/design3/App';

// Simple wrapper to handle the different App components
const DesignWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

function RootApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* We can use specific paths for different designs */}
        <Route path="/design2/*" element={<Design2App />} />
        <Route path="/design3/*" element={<Design3App />} />
        
        {/* Default to Design 3 as it's the current focus */}
        <Route path="/*" element={<Design3App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootApp;
