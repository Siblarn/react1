import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import tackle from "../image/tackle.png";
import solarbeam from "../image/solarbeam.png";

export default function Skill() {
  // const [count, setCount] = useState(0);
  // const [player2, setPlayer2] = useState(0);

  return (
    <div className="">
      Choose Skill
      <div className="flex ml-3 justify-between font-extrabold">
        {/* <div className=" mr-3">
          Player 1
          <div>
            <p
              style={{
                padding: "15px 18px 18px",
                marginLeft: "5px",
                height: "3rem",
                width: "3rem",
                borderRadius: "40px",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              {count}
            </p>
          </div>
        </div> */}
        {/* <div className="justify-between">
          Player 2
          <div>
            <p
              style={{
                padding: "15px 18px 18px",
                marginLeft: "5px",
                height: "3rem",
                width: "3rem",
                borderRadius: "40px",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              {count}
            </p>
          </div>
        </div> */}
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
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
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
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="btn btn-outline-success mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          {" "}
          Vine Whip
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-success mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Razor Leaf
        </div>

        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-success mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Seed Bomb
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />

        <div
          className="btn btn-outline-success mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Solar Beam
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
      </div>
      <div
        className="fire flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="btn btn-outline-danger mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Dragon Breath
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-danger mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Ember
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-danger mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Fire Fang
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-danger mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Flamethrower
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-danger mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Inferno
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-danger mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Flare Blitz
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-info mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Air Slash
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
      </div>
      <div
        className="water flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="btn btn-outline-primary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Hydro Pump
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-primary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Aqua Tail
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-primary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Water Pulse
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-primary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Water Gun
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-primary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Aqua Jet
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-primary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Aura Sphere
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
      </div>
      <div
        className="electric flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="btn btn-outline-warning mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Thunder
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-warning mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Thunderbolt
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-warning mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Spark
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-warning mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Thunder Shock
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-warning mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Nuzzle
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-warning mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Wild Charge
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-warning mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Disarming Voice
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-warning mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Thunder Punch
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-warning mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Charge Beam
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
      </div>
      <div
        className="steel flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="btn btn-outline-secondary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Flash Cannon
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        <div
          className="btn btn-outline-secondary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Metal Claw
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-secondary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Iron Tail
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-secondary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Rapid Spin
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-secondary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Crush Claw
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-secondary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Flail
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-secondary mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Flash Cannon
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
      </div>
      <div
        className="poison flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="btn btn-outline-dark mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Sludge
        </div>
        <img src={tackle} width="40rem" alt="mewtwo" />
        <div
          className="btn btn-outline-dark mt-1"
          // type="submit"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          Sludge Bomb
        </div>
        <img src={solarbeam} width="35rem" alt="solarbeam" />
        
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button class="bubbly-button mr-3" style={{ borderRadius: "50px 50px" }}>
          <Link to="/ingame">Start Game 2 player</Link>
        </button>
        
        <button class="bubbly-button" style={{ borderRadius: "50px 50px" }}>
          <Link to="/oneplayer">Start Game 1 player</Link>
        </button>
      </div>
    </div>
  );
}
