import React from "react";
import { Outlet, Link } from "react-router-dom";
import ReactDOM from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";

function FilterButton() {
    return (
      <div className="filters btn-group stack-exception">
      <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>all</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span className="visually-hidden">Show </span>
        <span>
        <Link to="/active">Active</Link>
        </span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span className="visually-hidden">Show </span>
        <span> <Link to="/complete">Complete</Link></span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span className="visually-hidden">Show </span>
        <span> <Link to="/check">check</Link></span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
    );
  }
  
  export default FilterButton;