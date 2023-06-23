import React, { useState } from 'react';

function DarkModeForm() {
  const[DarkModeForm, setDarkModeForm] = useState(true);
  const handleCss = () => {
    if (DarkModeForm) {
      return "black"
    } else {
      return "white"
    }
  }
  return (
    <form>
      <input
        id="dark-mode"
        className="toggle"
        type="checkbox"
        name="Dark mode"
        role="switch"
        value="on"
      />
      <label htmlFor="dark-mode" className="sr">
        Dark Mode
      </label>
      <div className="darklight"></div>
    </form>
  );
}

export default DarkModeForm;