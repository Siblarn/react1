import React from "react";
import { Outlet, Link } from "react-router-dom";
import pika from "../image/pika.png";
import bulbasaur from "../image/bulbasaur.png";
import Ivysaur from "../image/Ivysaur.png";
import charmander from "../image/charmander.png";
import mblastoise from "../image/mblastoise.png";
import blastoise from "../image/blastoise.png";
import raichu from "../image/raichu.png";
import sandshrew from "../image/sandshrew.png";
import sandslash from "../image/sandslash.png";

export default function Cardmain() {
  return (
    <div>
      <h1>Pokemon Card</h1>
      <div className="button2">
        <Link to="/Choose skill">Skill</Link>
      </div>

      <style className="hover"></style>

      <section className="demo">
        <div>
          <div className="ei1">
            <img src={pika} width="193rem" alt="pika" />
          </div>
          <div className="ei8">
            <img src={sandshrew} width="196rem" alt="sandshrew" />
          </div>
        </div>
        <div className="ei7">
          <img src={raichu} width="196rem" alt="raichu" />
        </div>
        <div>
          <div className="ei6">
            <img src={blastoise} width="196rem" alt="blastoise" />
          </div>
          <div className="ei4">
            <img src={bulbasaur} width="196rem" alt="bulbasaur" />
          </div>
        </div>
        <div>
          <div className="ei3">
            <img src={Ivysaur} width="196rem" alt="Ivysaur" />
          </div>

          <div className="ei2">
            <img src={mblastoise} width="192rem" alt="mblastoise" />
          </div>
        </div>
        <div
          className="card"
          style={{ width: "12rem", height: "16.5rem" }}
        ></div>
        <div>
          <div className="e9">
            <img src={sandslash} width="196rem" alt="sandslash" />
          </div>
          <div className="ei5">
            <img src={charmander} width="196rem" alt="charmander" />
          </div>
        </div>
      </section>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div
          className=""
          style={{ color: "black", fontWeight: "750", margin: "30px" }}
        ></div>
        <style className="hover2"></style>
        <section className="demo2">
          <span className="operator2"></span>
          <span className="operator2"></span>
        </section>

        <div
          className=""
          style={{ color: "black", fontWeight: "750", margin: "30px" }}
        >
          <div className="card10"></div>
        </div>
        <style className="hover2"></style>
        <section className="demo2">
          <span className="operator2"></span>
          <span className="operator2"></span>
        </section>
      </div>
    </div>
  );
}
