import React, { useState } from "react";
import Buttons from "./Buttons";

const BgColor = () => {
  const [state, setState] = useState("black");
  const handleClick = (color) => {
    setState(color);
  };
  return (
    <>
      <div
        className='w-screen h-screen'
        style={{ backgroundColor: state }}
      ></div>
      <Buttons handleClick={handleClick} />
    </>
  );
};

export default BgColor;
