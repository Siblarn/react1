import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Login from "./Login";
import PWDRequisite from "./PWDRequisite";

export default function Navbar(prop) {
  const text = prop.text || " ";
  const [loginpassword, setLoginpasswords] = useState("");
  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setLoginpasswords(e.target.value);
  };
  const handleOnFocus = () => {
    setPWDRequisite(true);
  };
  const handleOnBlur = () => {
    setPWDRequisite(false);
  };
  const handleOnKeyUp = (e) => {
    console.log(e);
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.target > 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };
  return (
    <div className="">
      <nav class="navbar navbar-light bg-light font-mono">
        <div class="container-fluid">
          <div
            style={{ display: "flex", fontWeight: "1000", fontSize: "28 px" }}
          >
            <a class="navbar-brand">My project</a>
            <li style={{ margin: "0px" }}>
              <button class="btn btn-outline-primary mx-0.5">
                <Link to="/Resume">Resume</Link>
              </button>
            </li>
            <li style={{ margin: "0px" }}>
              <button class="btn btn-outline-primary mx-1">
                <Link to="/Todolist">Todolist</Link>
              </button>
            </li>
            <li class="btn btn-outline-primary mx-0.5">
              <Link to="/TicTac">TicTac</Link>
            </li>
          </div>
          <div className="btn btn-outline-primary mx-0.5">
            <Link to="/test">DummyJSON</Link>
          </div>
          <form class="d-flex">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary mx-2">Search</button>

            <label
              className="dropdown "
              style={{ marginRight: "8rem", marginLeft: "6rem" }}
            >
              <div className="btn btn-outline-primary">
                <Link to="/Login">Login</Link>
              </div>
              <input type="checkbox" className="dd-input" id="test" />
              <ul className="dd-menu">
                <form className="px-4 py-3">
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail1">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleDropdownFormEmail1"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <div className="form-group">
                      <label htmlFor="loginpassword">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        id="loginpassword"
                        value={loginpassword}
                        onChange={handleOnChange}
                        onFocus={handleOnFocus}
                        onBlur={handleOnBlur}
                        onKeyUp={handleOnKeyUp}
                        placeholder="Password"
                      />
                      </div>
                    {pwdRequisite ? (
                      <PWDRequisite
                      capsLetterFlag={
                        checks.capsLetterCheck ? "valid" : "invalid"
                      }
                      numberFlag={checks.numberCheck ? "valid" : "invalid"}
                      pwdLengthFlag={
                        checks.pwdLengthCheck ? "valid" : "invalid"
                      }
                      specialCharFlag={
                        checks.specialCharCheck ? "valid" : "invalid"
                      }
                      />
                      ) : null}
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="dropdownCheck"
                    />
                    <label className="form-check-label" htmlFor="dropdownCheck">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </form>

                <a className="dropdown-item" href="#">
                  <br></br> <br></br>
                </a>
                <li style={{ color: "black" }}>
                  <a className="dropdown-item" href="#">
                    Forgot password?
                  </a>
                </li>

                <li style={{ color: "black" }}>Log Out</li>
                <div style={{ marginLeft: "20px" }}>
                  <Link to="/Regis">Register</Link>
                </div>
                <li style={{ color: "White", borderBottom: "1px solid gray" }}>
                  <a className="dropdown-item" href="#">
                    --------------------------
                  </a>
                </li>
                <li className="divider"></li>
              </ul>
            </label>
          </form>
        </div>
      </nav>
    </div>
  );
}
