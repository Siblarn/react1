import React, { useState } from "react";

export default function Active(props) {
 
  function handleSubmit(e) {
    e.preventDefault();
  
  }
  
  return (
    <div>
      <div>
        ♥ Active Work!
        <div>
          <button type="submit" className="btn toggle-btn btn__sm">
            submit
          </button>
          <button type="submit" className="btn toggle-btn btn__sm">
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
