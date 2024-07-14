import React from "react";

const Child = () => {
  return (
    <div>
      <button
        onClick={() => {
          alert("Clicking");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Child;
