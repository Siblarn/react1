import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ReactDOM from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Testfinal from "./Test/Testfinal";
import Main from "./Routes/Main";
import Login from "./Navbar/Login";
import Registereiei from "./Navbar/Register";


function App(props) {
  return (
    <div className="todoapp stack-large">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/Todolist" element={<Testfinal />} />
            <Route index element={<div>WELCOM</div>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Registereiei/>} />
         
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
