import React from 'react';
import ReactDOM from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App';
import './index.css';

// Initialize EmailJS with your public key
emailjs.init('wssqdw0XKRykQ4bzY');

console.log('Initializing application...');

function renderError(message: string) {
  const errorHtml = `
    <div style="padding: 20px; text-align: center;">
      <h2 style="margin-bottom: 16px; color: white;">Failed to load application</h2>
      <pre style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 4px; margin-bottom: 16px; text-align: left; color: white;">
        ${message}
      </pre>
      <button onclick="window.location.reload()" 
              style="background: #4dba87; border: 0; padding: 8px 16px; border-radius: 4px; color: white; cursor: pointer;">
        Reload page
      </button>
    </div>
  `;

  // Create a new div for the error message
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.innerHTML = errorHtml;
  document.body.appendChild(errorDiv);
}

try {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('Failed to find root element');
  }

  console.log('Found root element, creating React root...');

  // Create root and render app
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  console.log('App rendered successfully');
} catch (error) {
  console.error('Error initializing app:', error);
  renderError(error instanceof Error ? error.message : 'An unknown error occurred');
}
