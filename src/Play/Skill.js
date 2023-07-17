import React, { useState } from "react";
import tackle from "../image/tackle.png";

export default function Skill() {
  const [count, setCount] = useState(0);
  const [player2, setPlayer2] = useState(0);

  return (
    <div className="">
      Choose Skill
      <div className=" justify-between">
        Player 1
        <div>
          <p style={{padding:"15px 18px 18px",marginLeft:"5px",height:"3rem" , width:"3rem", borderRadius:"40px", fontSize:"18px", fontWeight:"700"}}>{count}</p>
        </div>
      </div>
      <div className="justify-between">
        Player 2
        <div>
          <p style={{padding:"15px 18px 18px",marginLeft:"5px",height:"3rem" , width:"3rem", borderRadius:"40px", fontSize:"18px", fontWeight:"700"}}>{count}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="btn btn-outline-secondary"
          type="submit"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {" "}
          TACKLE
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="btn btn-outline-success mt-1"
          type="submit"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {" "}
          Vine Whip
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="btn btn-outline-success mt-1"
          type="submit"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Razor Leaf
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
      </div>
    </div>
  );
}
