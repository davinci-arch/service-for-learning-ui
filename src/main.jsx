import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import Login from './components/Login/Login'; // Import the Login component
import Registration from './components/Registration/RegistrationForm'; // Import the Login component
import Header from './components/Header';
import ObjectsPage from './components/MainPage/Objects';
import "./components/styles/index.scss"
import SwitchPages from './components/SwitchPages';
// Get the root element from the HTML file
const rootElement = document.getElementById('root');

// Create and render the root
createRoot(rootElement).render(
  <StrictMode>
    <SwitchPages />
  </StrictMode>
);