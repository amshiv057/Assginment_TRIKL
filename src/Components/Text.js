import React, { useState } from "react";
import Draggable from "react-draggable";
export default function Text() {
  const [text, settext] = useState({
    text1: "",
  });

  function changeText(event) {
    const newtext = event.target.value;
    settext(newtext);
  }
  const bounds = {
    left: 0,
    top: 10,
    right: 600,
    bottom: 290,
  };
  return (
    <>
      <Draggable bounds={bounds}>
        <input
          type="text"
          placeholder="Write something"
          onChange={changeText}
          className="text"
          value={text.text1}
        ></input>
      </Draggable>
    </>
  );
}
