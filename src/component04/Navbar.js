import React from "react";

export default function Navbar(prop) {

  const text = prop.text || " ";

  return (
    <div className="">
      
    <nav class="navbar navbar-light bg-light font-mono">
      <div class="container-fluid">
        <a class="navbar-brand">My project</a>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    </div>
  );
}
