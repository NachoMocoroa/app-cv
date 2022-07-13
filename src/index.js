import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './languages/LanguageProvider';
import { fetchTranslations } from './languages/fetchTranslations';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider fetchTranslations={fetchTranslations}>
      <App />
    </LanguageProvider>,
  </React.StrictMode>
);
