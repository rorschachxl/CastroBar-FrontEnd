import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "../pages/Template";
import Login from "../pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/template" element={<Template />} />
      </Routes>
    </Router>
  ); 
}

export default App;
