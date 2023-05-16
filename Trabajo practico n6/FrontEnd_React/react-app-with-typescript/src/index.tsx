import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contador from './pages/Contador';
import Productos from './pages/Productos';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maps from './pages/Maps';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="*" element={<App />} />
      <Route path="/contador/:id" element={<Contador />} />
      {/* <Route path="/contador/{id}" element={<Contador />} /> */}
      <Route path="/productos" element={<Productos/>} />
      <Route path="/maps" element={<Maps/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
