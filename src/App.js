import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ReactDOM from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component04/Navbar";
import Layout from "./component04/Routertest";
import Button from "./component04/Button";
import Resume from "./component04/Resume";
import Testgame from "./component04/Testgame";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
   
            <Route path="/" element={<Layout />}>
              <Route path="/Resume" element={<Resume />} />
              <Route index element={<div>Hello Pasapit</div>} />
              <Route path="/Todolist" element={<Button name="test" />} />
              <Route path="10M" element={<Testgame name="tictac"/>} />
            </Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
