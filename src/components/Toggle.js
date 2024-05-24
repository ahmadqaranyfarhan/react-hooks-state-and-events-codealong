import React from "react";
import { useState } from "react";

function Toggle() {
  const [change, setChange] = useState(false);
  function handleChange() {
    setChange((change) => !change);
  }
  return (
    <>
      <button
        onClick={handleChange}
        style={{ background: "#565ffa", border: "#565ffa" }}
      >
        {change ? "ON" : "OFF"}
      </button>
    </>
  );
}

export default Toggle;
