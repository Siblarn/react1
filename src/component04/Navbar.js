import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar(prop) {
  const text = prop.text || " ";

  return (
    <div className="">
      <nav class="navbar navbar-light bg-light font-mono">
        <div class="container-fluid">
          <div
            style={{ display: "flex", fontWeight: "1000", fontSize: "28 px" }}
          >
            <a class="navbar-brand">My project</a>
            <li style={{ margin: "0px" }}>
              <button class="btn btn-outline-dark mx-0.5">
                <Link to="/Resume">Resume</Link>
              </button>
            </li>
            <li style={{ margin: "0px" }}>
              <button class="btn btn-outline-dark mx-1">
                <Link to="/Todolist">Todolist</Link>
              </button>
            </li>
            <li class="btn btn-outline-dark mx-0.5">
              <Link to="/TicTac">TicTac</Link>
            </li>
          </div>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary mx-1">Search</button>
            <li class="btn btn-dark mx-1">
              <label className="dropdown">
                <div className="dd-button btn btn-dark">
                  <Link to="/Login">Login</Link>
                </div>
                <input type="checkbox" className="dd-input" id="test" />
                <ul className="dd-menu">
                  <li style={{ color: "black" }}>Register</li>
                  <li style={{ color: "black" }}>Log Out</li>
                  <li style={{ color: "black" }}>Contact</li>
                  <li className="divider"></li>
                </ul>
              </label>
            </li>
          </form>
        </div>
      </nav>
    </div>
  );
}
