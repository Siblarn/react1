import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactDOM } from "react";

export default function Playertwo() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <div
        className="bubbly-button m-4 font-semibold"
        style={{
          justifyContent: "center",
          alignItems: "center",
          lineHeight: "40px",
          fontFamily: "Roboto",
        }}
      >
        Player 2
        <form onSubmit={handleSubmit}>
        <label>
              Username :
              <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </label>
          <label>
            Your Pokemon :
            <input
              type="text"
              name="yourpokemon"
              value={inputs.yourpokemon || ""}
              onChange={handleChange}
            />
          </label>
          <div>
            <label>
              First Skill :
              <input
                type="text"
                name="fskill"
                value={inputs.fskill || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Second Skill :
              <input
                type="text"
                name="sskill"
                value={inputs.sskill || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Third Skill :
              <input
                type="text"
                name="tskill"
                value={inputs.tskill || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Fourth Skill :
              <input
                type="text"
                name="foskill"
                value={inputs.foskill || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          <input className="btn btn-outline-success mt-2" type="submit" />
        </form>
      </div>
      <div className="button2">
      <Link to="/start">Start</Link>
      </div>
    </div>
  );
}
