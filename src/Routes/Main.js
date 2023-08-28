import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Showmem from "../Member/Showmem";

export default function Main() {
  let user = localStorage.getItem("user");
  const [isUserLogin, setIsUserLogin] = useState(user ? true : false);

  const dynamicLogin = (isUserLogin01) => {
    if (!isUserLogin01) {
      return (
        <>
          <Link to="/login" style={{
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",}}>Login</Link>
        </>
      );
    } else {
      return (
        <>
          <Link style={{
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",}}
            to="/"
            onClick={() => {
              localStorage.removeItem("user");
              setIsUserLogin(false);
              window.location.reload();
            }}
          >
            Logout
          </Link>
        </>
      );
    }
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg" >
        <div className="container-fluid">
          <div
            style={{
              border: "0.3px solid black",
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",
            }}
          >
            <Link to="/" style={{
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",}}>Home</Link>
          </div>
          <div
            style={{
              border: "0.3px solid black",
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",
            }}
          >
            <Link to="/Todolist" style={{
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",}}>ToDoList</Link>
          </div>
          {/* <div className="btn btn-outline-primary">
            {!isUserLogin ? (
              <>
                <Link to="/login">Login</Link>
              </>
              ) : (
                <>
                <Link
                to="/"
                onClick={() => {
                    localStorage.removeItem("user");
                    setIsUserLogin(false);
                  }}
                  >
                  Logout
                  </Link>
                  </>
                  )}
                </div> */}
          <div
            style={{
              border: "0.3px solid black",
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",
            }}
          >
            {dynamicLogin(isUserLogin)}
          </div>
          {/* <div className="btn btn-outline-primary">
            <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("user");
            }}
            >
              Logout
              </Link>
          </div> */}
          <div
            style={{
              border: "0.3px solid black",
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",
            }}
          >
            <Link to="/register" style={{
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",}}>Register</Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
