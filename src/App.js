import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ReactDOM from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Testfinal from "./Test/Testfinal";
import Main from "./Routes/Main";
import Login from "./Navbar/Login";
import Registereiei from "./Navbar/Register";
import Active from "./Test/Active";
import Complete from "./Test/Complete";
import Check from "./Test/Check";
import Showmem from "./Member/Showmem";


function App(props) {
  return (
    <div className="todoapp stack-large">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/Todolist" element={<Testfinal />} />
            <Route index element={<Showmem/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Registereiei/>} />
            <Route path="/received" element={<Active/>} />
            <Route path="/check" element={<Check/>} />
            <Route path="/complete" element={<Complete/>} />
         
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
