import React, { useEffect, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [bg, setBg] = useState("red");

  useEffect(() => {
    console.log("rerendered");
  }, []);

  return (
    <div style={{ background: bg }}>
      <Child />
    </div>
  );
};

export default Parent;
