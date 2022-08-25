import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";


function ChangeColor() {
  const [color, setColor] = useState("");
const dispatch = useDispatch()
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      /> 
      <button onClick={() => {dispath(changeColor(color))}}>Change Color</button>
    </div>
  );
}

export default ChangeColor;
