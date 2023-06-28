import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ReactDOM from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component04/Routertest";
import Button from "./component04/Button";
import Resume from "./component04/Resume";
import Tictac from "./component04/Tictac";
import Login from "./component04/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Resume" element={<Resume />} />
            <Route index element={<div>Hello Pasapit</div>} />
            <Route path="/Todolist" element={<Button name="test" />} />
            <Route path="TicTac" element={<Tictac />} />
            <Route path="/Login" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
