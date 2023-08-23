import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ReactDOM from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";

export default function Main() {
  let user = localStorage.getItem("user");
  const [isUserLogin, setIsUserLogin] = useState(user ? true : false);

  const dynamicLogin = (isUserLogin01) => {
    if (!isUserLogin01) {
      return (
        <>
          <Link to="/login">Login</Link>
        </>
      );
    } else {
      return (
        <>
          <Link
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="btn btn-outline-primary">
            <Link to="/">Home</Link>
          </div>
          <div className="btn btn-outline-primary">
            <Link to="/Todolist">ToDoList</Link>
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
          {dynamicLogin(isUserLogin)}
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
          <div className="btn btn-outline-primary">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
