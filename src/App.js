import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compteurs from "./components/Compteurs";
import ConvertersContainer from "./components/ConvertersContainer";
import Selecteurs from "./components/Selecteurs";
import Configurator from "./components/Configurator";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Movers from "./components/Movers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="compteurs" element={<Compteurs />} />
        <Route path="converters" element={<ConvertersContainer />} />
        <Route path="selecteurs" element={<Selecteurs />} />
        <Route path="configurateur" element={<Configurator />} />
        <Route path="modale" element={<Modal />} />
        <Route path="movers" element={<Movers />} />
      </Routes>
    </BrowserRouter>
  );
}
