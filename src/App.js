// import "./App.css";
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
import { Outlet, Link } from "react-router-dom";
import FilterButton from "./Test/FilterButton";

function App(props) {
  return (
    <div
      className="todoapp stack-large"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#3b1c32",
        display: "flex",
        justifyContent: "center",
        padding: "3% 3% ",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "80vh",
          overflow: "auto",
          padding: "3% 3%",
          backgroundColor: "#ffcf9c",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          borderRadius: "10px",
        }}
      >
   
        <h2
          style={{
            fontFamily: "Ubuntu, sans-serif",
            fontWeight: "bold",
            color:"#815338"
          }}
        >
          Final Project - ToDoList  ♥
        </h2>
        
        {/* <h3
          style={{
            fontFamily: "Ubuntu, sans-serif",
          }}
        >
          Work List !
        </h3> */}
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/Todolist" element={<Testfinal />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registereiei />} />
              <Route path="/received" element={<Active />} />
              <Route path="/check" element={<Check />} />
              <Route path="/complete" element={<Complete />} />
            </Route>
          </Routes>
         
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;