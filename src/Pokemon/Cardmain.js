import React from "react";
import { Outlet, Link } from "react-router-dom";
import pika from "../image/pika.png";
import mewtwo from "../image/mewtwo.png";
import evee from "../image/evee.png";

export default function Cardmain() {
  const handleClick = (e) => {
    console.log(e.currentTarget.getAttribute("data-value"));
  };
  return (
    <div>
      <h1>Pokemon Card</h1>

      <style className="hover"></style>

      <section className="demo">
        <div className="card"></div>
        <div
          className="card"
          style={{
            background: "url(https://assets.codepen.io/13471/eevee-gx.webp)",
          }}
        ></div>
        <div
          className="card"
          style={{
            background: "url(https://assets.codepen.io/13471/mewtwo-gx.webp)",
          }}
        ></div>
        <div className="ei3">
          <img src={evee} width="192rem" alt="evee" />
        </div>
        <div className="ei2">
          <img src={mewtwo} width="192rem" alt="mewtwo" />
        </div>
        <div
          className="card"
          style={{ width: "12rem", height: "16.5rem" }}
        ></div>
        <div className="ei1">
          <img src={pika} width="192rem" alt="pika" />
        </div>
        <div
          className="card"
          style={{ width: "12rem", height: "16.5rem" }}
        ></div>
        <span className="operator"></span>
        <span className="operator"></span>
      </section>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div
          className=""
          style={{ color: "black", fontWeight: "750", margin: "30px" }}
        >
          Player 1
        </div>
        <style className="hover2"></style>
        <section className="demo2">
          <div
            className="card2"
            style={{ width: "12rem", height: "16.5rem" }}
          ></div>
          <span className="operator2"></span>
          <span className="operator2"></span>
        </section>

        <div
          className=""
          style={{ color: "black", fontWeight: "750", margin: "30px" }}
        >
          Player 2<div className="card10"></div>
        </div>
        <style className="hover2"></style>
        <section className="demo2">
          <div
            className="card2"
            style={{ width: "12rem", height: "16.5rem" }}
          ></div>
          <span className="operator2"></span>
          <span className="operator2"></span>
        </section>
        <button
          className="btn btn-success"
          data-value="apply clicked"
          onClick={handleClick}
        >
          <Link to="/Choose skill">Choose skill</Link>
        </button>
      </div>
    </div>
  );
}
