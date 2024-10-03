import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "../pages/template";
/* import Login from "../pages/Login"; */

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Template />} />
        <Route exact path="/Template" element={<Template />} />
      </Routes>
    </Router>
  ); 
}

export default App;
