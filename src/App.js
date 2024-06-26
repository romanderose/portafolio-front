import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cabecera from './components/layout/Cabecera';
import Cuerpo from './components/layout/Cuerpo';
import Pie from './components/layout/Pie';

import CurrículumPag from './pages/CurrículumPag';
import PortafolioPag from './pages/PortafolioPag';
import ContactoPag from './pages/ContactoPag';

function App() {
  return (
    <div className="App">
      <Cabecera/>

      <BrowserRouter>
        <Cuerpo/>

        <Routes>
          <Route path='curriculum' element={<CurrículumPag />} />
          <Route path='portafolio' element={<PortafolioPag />} />
          <Route path='contacto' element={<ContactoPag />} />
        </Routes>

      </BrowserRouter>
      
      <Pie/>
    </div>
  );
}

export default App;
