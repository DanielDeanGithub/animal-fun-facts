import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import './index.css';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
