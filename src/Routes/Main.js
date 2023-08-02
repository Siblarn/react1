import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ReactDOM from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";


export default function Main() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
          <div className="btn btn-outline-primary">
            <Link to="/">Home</Link>
          </div>
            <div className="btn btn-outline-primary">
              <Link to="/Todolist">ToDoList</Link>
            </div>
            <div className="btn btn-outline-primary">
              <Link to="/login">Login</Link>
            </div>
            <div className="btn btn-outline-primary">
              <Link to="/register">Register</Link>
            </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
