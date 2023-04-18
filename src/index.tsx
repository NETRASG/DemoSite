import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const ele:HTMLElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(ele);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);