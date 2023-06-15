import { useEffect, useState } from "react";

export default function TicTacToe(props) {
  const { value, state } = props;
  const [ticTac, setTicTac] = useState(value);
  useEffect(()=>{
    setTicTac(ticTac)
  },[props])
  const handleValue = (bool) => {
    if (state !== "idle") {
      if (bool == "x") {
        return "X";
      } else if (bool == "o") {
        return "O";
      } else {
        return "";
      }
    }
    return "Click";
  };

  return (
    <div
      style={{
        width: "170px",
        height: "170px",
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        border: "25px solid pink",
        cursor: "pointer",
      }}
      onClick={() => {
        // setTicTac(!ticTac);
      }}
    >
      <div style={{ fontSize: "60px" }}> {handleValue(ticTac)}</div>
    </div>
  );
}
