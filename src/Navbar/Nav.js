import React from "react";
import { Outlet, Link } from "react-router-dom";
import eieiicon from "../image/eieiicon.png";

export default function Nav() {
  return (
    <div className="">
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <div
            className="flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <img src={eieiicon} alt="Bootstrap" width="30" height="24" />
            <div
              className="ml-5 flex"
              style={{ fontFamily: "roboto", fontWeight: "750" }}
            >
              POKEMON GAME
              <div className="ml-10">
                <Link to="/Skill">Pokemon/Skill</Link>
              </div>
              <div className="ml-10">
                <Link to="/PlayPokemon">How To Play</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
