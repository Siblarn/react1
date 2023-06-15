import { useEffect, useState } from "react";
import "./App.css";
import TicTacToe from "./pages/component/props";
import Start from "./pages/component/Start";

// import Props from "./pages/component/props";
// import ReactFact from "./pages/FirstReact";
// import { Route, Routes, useParams } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Body2 from "./pages/component/Body2";
// import Card from "./pages/component/Card";
// import Resume from "./Resume";
// import Command1 from "./CommandShow/Command1";
// import Command2 from "./CommandShow/Command2";
// import Command3 from "./CommandShow/Command3";

function App() {
  const toggle = (bool) => {
    return !bool;
  };
  const [state, setState] = useState("idle");
  const [value, setValue] = useState({
    a1: "",
    a2: "",
    a3: "",
    b1: "",
    b2: "",
    b3: "",
    c1: "",
    c2: "",
    c3: "",
  });

  const [a1, setA1] = useState(value.a1);

  const handleToggleXO = (value) => {
    if (state != "idle") {
      if (value == "x") {
        return "o";
      } else {
        return "x";
      }
    }
  };

  useEffect(() => {
    console.log("effect work.");
    if (a1 == "x") {
      alert("x win");
    }
  }, [a1]);

  return (
    <div className="App">
      <div
        style={{
          fontSize: "60px",
          fontWeight: "700",
          justifyContent: "center",
          alignContent: "center",
          marginLeft: "37rem",
          color: "gray",
        }}
      >
        TicTacToe
      </div>
      <div
        style={{ display: "flex" }}
        onClick={() => {
          setState("playing");
        }}
      >
        <button>start</button>
      </div>

      <div style={{ marginLeft: "25rem" }}>
        <div style={{ display: "flex" }}>
          <div
            onClick={() => {
              const preValue = value;
              value.a1 = handleToggleXO(value.a1);
              setValue(preValue);
              setA1(value.a1);
              console.log(preValue);
            }}
          >
            <TicTacToe value={a1} state={state} />
          </div>
          <div
            onClick={() => {
              const preValue = value;
              value.a2 = handleToggleXO(value.a2);
              setValue(preValue);
              console.log(preValue);
            }}
          >
            <TicTacToe value={value.a2} state={state} />
          </div>
          <div
            onClick={() => {
              const preValue = value;
              value.a3 = handleToggleXO(value.a3);
              setValue(preValue);
              console.log(preValue);
            }}
          >
            <TicTacToe value={value.a3} state={state} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            onClick={() => {
              const preValue = value;
              value.b1 = handleToggleXO(value.a1);
              setValue(preValue);
              console.log(preValue);
            }}
          >
            <TicTacToe value={value.b1} state={state} />
          </div>
          <div
            onClick={() => {
              const preValue = value;
              value.b2 = handleToggleXO(value.b2);
              setValue(preValue);
              console.log(preValue);
            }}
          >
            <TicTacToe value={value.b2} state={state} />
          </div>
          <div
            onClick={() => {
              const preValue = value;
              value.b3 = handleToggleXO(value.b3);
              setValue(preValue);
              console.log(preValue);
            }}
          >
            <TicTacToe value={value.b3} state={state} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            onClick={() => {
              const preValue = value;
              value.c1 = handleToggleXO(value.a1);
              setValue(preValue);
              console.log(preValue);
            }}
          >
            <TicTacToe value={value.b1} state={state} />
          </div>
          <div
            onClick={() => {
              const preValue = value;
              value.c2 = handleToggleXO(value.b2);
              setValue(preValue);
              console.log(preValue);
            }}
          >
            <TicTacToe value={value.b2} state={state} />
          </div>
          <div
            onClick={() => {
              const preValue = value;
              value.c3 = handleToggleXO(value.b3);
              setValue(preValue);
              console.log(preValue);
            }}
          >
            <TicTacToe value={value.b3} state={state} />
          </div>
        </div>
      </div>

      {/* <Command1/> */}
      {/* <Command2/> */}
      {/* <Command3/> */}
      {/* <Props num={3} fun={toggle}/> */}
      {/* <Props num={20} fun={toggle}/> */}
      {/* <Resume/> */}
      {/* <Navbar /> */}
      {/* <Card/> */}
      {/* <Body2 name='test'/> */}
      {/* <Header/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
