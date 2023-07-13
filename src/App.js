import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ReactDOM from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Nav from "./Navbar/Nav";
import Testcard from "./Pokemon/Testcard";
import Cardmain from "./Pokemon/Cardmain";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
        <Route index element={<Cardmain/>} />
        <Route path="/Skill" element={<Testcard/>} />
     
  
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
