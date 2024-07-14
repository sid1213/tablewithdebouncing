import React, { useEffect, useState } from "react";

const Example = () => {
  const [state, setState] = useState(5);

  useEffect(() => {
    console.log("rerender");

    //unmount
    return () => {
      console.log("unmount");
    };
  }, [state]);

  return (
    <div>
      {state}
      <button onClick={() => setState(5)}>click</button>
    </div>
  );
};

export default Example;
