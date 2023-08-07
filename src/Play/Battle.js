import React from "react";
export default function Battle() {
  const shoot = () => {
    alert("Player 1 win!");
  };
  return (
    <div className="m-4">
      <div className=" bubbly-button">Click for Start</div>
      <div>Player 1 VS Player 2</div>
      <div className="flex space-x-10 mt-4">
        <div className="button2">Round 1</div>
        <div>
          <button onClick={shoot}>
            <div className="button2">Finish</div>
          </button>
        </div>
      </div>
    </div>
  );
}
