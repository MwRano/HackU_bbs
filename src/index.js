import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 では .client を使います
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
