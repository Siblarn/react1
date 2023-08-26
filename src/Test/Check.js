import React from "react";
import Active from "./Active";


export default function Check() {
  return (
    <div>
      <div>
        ♥ Check Work!
        <>
          <div>
            <button type="submit" className="btn toggle-btn btn__sm">
              Complete
            </button>
            <button type="submit" className="btn toggle-btn btn__sm">
              cancel
            </button>
          </div>
        </>
      </div>
    </div>
  );
}
