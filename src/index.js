import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider as LangProvider } from './Context/LangContext';
import { TextProvider } from './Context/LineText';
import AOS from 'aos';
import { SearchProvider } from './Context/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LangProvider>
    <BrowserRouter>
      <TextProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </TextProvider>
    </BrowserRouter>
  </LangProvider>
);

