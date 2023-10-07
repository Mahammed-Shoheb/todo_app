import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './normalize.css';
import './index.css';
import { ToDOProvider } from './store/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDOProvider>
      <App />
    </ToDOProvider>
  </React.StrictMode>
);
