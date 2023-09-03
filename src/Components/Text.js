import React, { useState } from "react";
import Draggable from "react-draggable";
import ResizableDiv from "./ResizableDiv";
export default function Text() {
  const [text, settext] = useState({
    text1: "hello",
  });

  function changeText(event) {
    const newtext = event.target.value;
    settext(newtext);
  }
  const bounds = {
    left: -140,
    top: -347,
    right: 470,
    bottom: -15,
  };
  return (
    <Draggable bounds={bounds}>
      <input
        type="text"
        onChange={changeText}
        className="text"
        value={text.text1}
      ></input>
    </Draggable>
  );
}
