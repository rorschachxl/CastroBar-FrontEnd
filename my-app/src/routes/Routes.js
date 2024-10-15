import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "../pages/client/InicioMenu";
import InicioMenu from "../pages/client/InicioMenu";
import Recomendados from "../pages/client/Recomendados";
/* import Login from "../pages/Login"; */

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Template />} />
        <Route exact path="./Template" element={<Template />} />
        <Route path="/InicioMenu" element={<InicioMenu />} />
        <Route path="/Recomendados" element={<Recomendados />} />
      </Routes>
    </Router>
  ); 
}

export default App;
