import React from "react";

export default function Cardmain() {
  
  return (
    <div>
      <h1>Pokemon Card</h1>

      <style className="hover"></style>

      <section className="demo">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card" style={{width:'12rem', height:"16.5rem"}}></div>
        <div className="card" style={{width:'12rem', height:"16.5rem"}}></div>
        <span className="operator"></span>
        <span className="operator"></span>
      </section>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div className="" style={{ color: "black", fontWeight: "750" }}>
          Player 1
        </div>
        <style className="hover2"></style>
        <section className="demo2">
          <div className="card2" style={{width:'12rem', height:"16.5rem"}}></div>
          <span className="operator2"></span>
          <span className="operator2"></span>
        </section>

        <div className="" style={{ color: "black", fontWeight: "750" }}>
          Player 2
        </div>
        <style className="hover2"></style>
        <section className="demo2">
          <div className="card2" style={{width:'12rem', height:"16.5rem"}}></div>
          <span className="operator2"></span>
          <span className="operator2"></span>
        </section>
      </div>

    </div>
  );
}