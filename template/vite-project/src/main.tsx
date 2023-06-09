import './index.css'
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Save from './pages/Save';
import Crud from './pages/Crud';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/crud" element={<Crud />} />
      <Route path="/save/:id" element={<Save/>} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
