import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ReactDOM from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Nav from "./Navbar/Nav";
import Testcard from "./Pokemon/Testcard";
import Cardmain from "./Pokemon/Cardmain";
import Skill from "./Play/Skill";
import Ingame from "./Play/Ingame";
import Playertwo from "./Play/Playertwo";
import Battle from "./Play/Battle";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
        <Route index element={<Cardmain/>} />
        <Route path="/Skill" element={<Testcard/>} />
        <Route path="/Choose skill" element={<Skill/>} />
        <Route path="/ingame" element={<Ingame/>} />
        <Route path="/playertwo" element={<Playertwo/>} />
        <Route path="/start" element={<Battle/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
