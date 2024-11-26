import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import Login from './components/Login/Login'; // Import the Login component

// Get the root element from the HTML file
const rootElement = document.getElementById('root');

// Create and render the root
createRoot(rootElement).render(
  <StrictMode>
    <Login /> {/* Render the Login component */}
  </StrictMode>
);