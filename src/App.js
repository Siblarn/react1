<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 40d434a4ca16a0033aa6804eedd8721ee4944bbe
import "./App.css";
import Testgame from "./pages/component/Testgame";
import Object from "./pages/component/Object";
// import TicTacToe from "./pages/component/props";
// import Start from "./pages/component/Start";
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
<<<<<<< HEAD
  // const Start01 = (Boolean) => {
  //   return !Boolean;
  // }
  function refreshPage() {
    window.location.reload(false);
  }
  // const [state, setState] = useState(false);

  const [state, setState] = useState("idle");
  const [value, setValue] = useState({
    a1: " ",
    a2: " ",
    a3: " ",
    b1: " ",
    b2: " ",
    b3: " ",
    c1: " ",
    c2: " ",
    c3: " ",
  });
  const [a1, setA1] = useState(value.a1);
  const [a2, setA2] = useState(value.a2);
  const [a3, setA3] = useState(value.a3);
  const [b1, setB1] = useState(value.b1);
  const [b2, setB2] = useState(value.b2);
  const [b3, setB3] = useState(value.b3);
  const [c1, setC1] = useState(value.c1);
  const [c2, setC2] = useState(value.c2);
  const [c3, setC3] = useState(value.c3);
=======
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
  const [a2, setA2] = useState(value.a2);
  const [a3, setA3] = useState(value.a3);
>>>>>>> 40d434a4ca16a0033aa6804eedd8721ee4944bbe

  const handleToggleXO = (value) => {
    if (state != "idle") {
      if (value == "x") {
        return "o";
      } else {
        return "x";
      }
    }
<<<<<<< HEAD
  };
  const cardTicTacStylr = {
    width: "170px",
    height: "170px",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    border: "25px solid pink",
    cursor: "pointer",
  };
  useEffect(() => {
    console.log("effect work.");
    if (a1 == "x") {
      alert("x win");
    }
    if (a1 == 'o'){
      alert ("O win")
    }
  }, [a1]);

  const handleCheckwina1 = () => {
    const arr = [a1, a2, a3];
    const concat_arr = arr.join("");
    console.log("concat_arr ", concat_arr);
    if (concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${a1}`);
    }
  };
  const handleCheckwina2 = () => {
    const arr = [a1, b2, c3];
    const concat_arr = arr.join("");
    console.log("concat_arr ", concat_arr);
    if (concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${a1}`);
    }
  };
  const handleCheckwina3 = () => {
    const arr = [a1, b2, c3];
    const concat_arr = arr.join("");
    console.log("concat_arr ", concat_arr);
    if (concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${a1}`);
    }
  };
  const handleCheckwinb1 = () => {
    const arr = [b1, b2, b3];
    const concat_arr = arr.join("");
    console.log("concat_arr ", concat_arr);
    if (concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${b1}`);
    }
  };
  const handleCheckwinb2 = () => {
    const arr = [b2, a1, c3];
    const concat_arr = arr.join("");
    console.log("concat_arr ", concat_arr);
    if (concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${b2}`);
    }
  };
  const handleCheckwinb3 = () => {
    const arr = [b2, a3, c1];
    const concat_arr = arr.join("");
    console.log("concat_arr ", concat_arr);
    if (concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${b2}`);
    }
  };
  const handleCheckwinb4 = () => {
    const arr = [b2, a2, c2];
    const concat_arr = arr.join("");
    console.log("concat_arr ", concat_arr);
    if (concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${b2}`);
    }
  };
  const handleCheckwinc1 = () => {
    const arr = [c1, c2, c3];
    const concat_arr = arr.join("");
    console.log("concat_arr ", concat_arr);
    if (concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${c1}`);
    }
  };
  const handleCheckwinac2 = () => {
    const arr = [c1, b1, a1];
    const concat_arr = arr.join("");
    console.log("concat_arr ", concat_arr);
    if (concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${c1}`);
    }
  };
  const handleCheckwinc3 = () => {
    const arr = [c1, b2, a3];
    const concat_arr = arr.join("");
    console.log("concat_arr ", concat_arr);
    if (concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${c1}`);
    }
=======
>>>>>>> 40d434a4ca16a0033aa6804eedd8721ee4944bbe
  };

  const cardTicTacStylr = {
    width: "170px",
    height: "170px",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    border: "25px solid pink",
    cursor: "pointer",
  }

  useEffect(() => {
    console.log("effect work.");
    console.log(value);
    console.log(`${a1} - ${a2} - ${a3}`);
    handleCheckWinner()
  }, [a1,a2,a3]);

  const handleCheckWinner = () => {
    const arr = [a1,a2,a3]
    const concat_arr = arr.join("");
    console.log("concat_arr ",concat_arr);
    if(concat_arr == "xxx") {
      console.log("winer work");
      alert(`THE WINER IS ${a1}`)
   }
  }

  return (
    <div className="App">
<<<<<<< HEAD
      <div>
        <div
          style={{
            fontSize: "60px",
            fontWeight: "700",
            justifyContent: "center",
            alignContent: "center",
            marginLeft: "36.5rem",
            color: "gray",
          }}
        >
          TicTacToe
        </div>
        <div style={{ display: "flex" }}></div>
        <button
          style={{
            marginLeft: "170px",
            width: "8rem",
            height: "3.5rem",
            backgroundColor: "pink",
            fontSize: "30px",
            border: "5px solid gray",
            color: "gray",
            fontWeight: "800",
            cursor: "pointer",
          }}
          onClick={() => {
            setState(!state);
          }}
        >
          {state ? "STOP" : "PLAY"}{" "}
        </button>
        <br></br>
        <br></br>
        <button
          style={{
            cursor: "pointer",
            marginLeft: "170px",
            color: "Pink",
            backgroundColor: "gray",
            border: "5px solid pink",
            fontSize: "20px",
            fontWeight: "600",
          }}
          onClick={refreshPage}
        >
          Play Again!
        </button>

        <div style={{ marginLeft: "25rem" }}>
          <div style={{ display: "flex" }}>
            <div
              onClick={() => {
                const preValue = value;
                value.a1 = handleToggleXO(value.a1);
                setValue(preValue);
                setA1(value.a1);
                console.log(preValue);
                setA1(handleToggleXO(a1));
              }}
            >
              <Testgame value={a1} state={state} />
            </div>
            <div
              onClick={() => {
                const preValue = value;
                value.a2 = handleToggleXO(value.a2);
                setValue(preValue);
                console.log(preValue);
                setA2(handleToggleXO(a2));
              }}
            >
              <Testgame value={value.a2} state={state} />
            </div>
            <div
              onClick={() => {
                const preValue = value;
                value.a3 = handleToggleXO(value.a3);
                setValue(preValue);
                console.log(preValue);
                setA2(handleToggleXO(a3));
              }}
            >
              <Testgame value={value.a3} state={state} />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              onClick={() => {
                const preValue = value;
                value.b1 = handleToggleXO(value.b1);
                setValue(preValue);
                console.log(preValue);
                setB1(handleToggleXO(b1));
              }}
            >
              <Testgame value={value.b1} state={state} />
            </div>
            <div
              onClick={() => {
                const preValue = value;
                value.b2 = handleToggleXO(value.b2);
                setValue(preValue);
                console.log(preValue);
                setB2(handleToggleXO(b2));
              }}
            >
              <Testgame value={value.b2} state={state} />
            </div>
            <div
              onClick={() => {
                const preValue = value;
                value.b3 = handleToggleXO(value.b3);
                setValue(preValue);
                console.log(preValue);
                setB3(handleToggleXO(b3));
              }}
            >
              <Testgame value={value.b3} state={state} />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              onClick={() => {
                const preValue = value;
                value.c1 = handleToggleXO(value.c1);
                setValue(preValue);
                console.log(preValue);
                setC1(handleToggleXO(c1));
              }}
            >
              <Testgame value={value.c1} state={state} />
            </div>
            <div
              onClick={() => {
                const preValue = value;
                value.c2 = handleToggleXO(value.c2);
                setValue(preValue);
                console.log(preValue);
                setC2(handleToggleXO(c2));
              }}
            >
              <Testgame value={value.c2} state={state} />
            </div>
            <div
              onClick={() => {
                const preValue = value;
                value.c3 = handleToggleXO(value.c3);
                setValue(preValue);
                console.log(preValue);
                setC3(handleToggleXO(c3));
              }}
            >
              <Testgame value={value.c3} state={state} />
            </div>
          </div>
        </div>

        {/* <div style={{ display: 'flex', marginLeft: '25rem' }}>
          <Testgame value={""} state={state} a1={a1} />
          <Testgame value={""} state={state} a2={a2}/>
          <Testgame value={""} state={state} a3={a3}/>
        </div>
        <div style={{ display: 'flex', marginLeft: '25rem' }}>
          <Testgame value={""} state={state} b1={b1}/>
          <Testgame value={""} state={state} b2={b2}/>
          <Testgame value={""} state={state} b3={b3}/>
        </div>
        <div style={{ display: 'flex', marginLeft: '25rem' }}>
          <Testgame value={""} state={state} c1={c1}/>
          <Testgame value={""} state={state} c2={c2}/>
          <Testgame value={""} state={state} c3={c3}/>
        </div> */}
        <Object />
      </div>

      {/* <Start value={true}/>
</div>
<div style={{ marginLeft: '25rem' }}>
<div style={{ display: 'flex' }}>
<TicTacToe value={false} />
<TicTacToe value={true} />
<TicTacToe value={true} />
</div>
<div style={{ display: 'flex' }}>
<TicTacToe value={false} />
<TicTacToe value={false} />
<TicTacToe value={true} />
</div>
<div style={{ display: 'flex' }}>
<TicTacToe value={true} />
<TicTacToe value={false} />
<TicTacToe value={true} />
</div>
</div> */}

      {/* <Command1 /> */}
=======
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
              setA1(handleToggleXO(a1));
            }}
          >
            <div
              style={cardTicTacStylr}
            >
              <div style={{ fontSize: "60px" }}> {a1}</div>
            </div>
          </div>
          <div
            onClick={() => {
              setA2(handleToggleXO(a2));
            }}
          >
         
            <div
              style={cardTicTacStylr}
            >
              <div style={{ fontSize: "60px" }}> {a2}</div>
            </div>
          </div>
          <div
            onClick={() => {
              setA3(handleToggleXO(a3));
            }}
          >
            {/* <TicTacToe value={value.a3} state={state} /> */}
            <div
              style={cardTicTacStylr}
            >
              <div style={{ fontSize: "60px" }}> {a3}</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            onClick={() => {
              const preValue = value;
              value.b1 = handleToggleXO(value.b1);
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
>>>>>>> 40d434a4ca16a0033aa6804eedd8721ee4944bbe
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
