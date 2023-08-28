import React from "react";
import { Outlet, Link } from "react-router-dom";
import ReactDOM from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";

function FilterButton() {
  return (
    <div
      className="filters btn-group stack-exception"
      style={{
        fontFamily: "Ubuntu, sans-serif",
        marginBottom: "8px",
        marginTop: "1.5rem",
      }}
    >
      <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>
          <Link
            to="/Todolist"
            style={{
              border: "0.3px solid #2b2d42",
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",
            }}
          >
            all
          </Link>
        </span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span className="visually-hidden">Show </span>
        <span>
          <Link
            to="/received"
            style={{
              border: "0.3px solid #2b2d42",
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",
              marginLeft:"3rem"
            }}
          >
            Received Work
          </Link>
        </span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span className="visually-hidden">Show </span>
        <span>
          {" "}
          <Link
            to="/check"
            style={{
              border: "0.3px solid #2b2d42",
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",
              marginLeft:"3rem"
            }}
          >
            Check Work
          </Link>
        </span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span className="visually-hidden">Show </span>
        <span>
          {" "}
          <Link
            to="/complete"
            style={{
              border: "0.3px solid #2b2d42",
              padding: "5px",
              fontFamily: "Ubuntu, sans-serif",
              backgroundColor: "#BDC2D0",
              color: "#3b1c32",
              fontWeight: "bold",
              borderRadius: "10px 10px",
              marginLeft:"3rem"
            }}
          >
            Complete
          </Link>
        </span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  );
}

export default FilterButton;
