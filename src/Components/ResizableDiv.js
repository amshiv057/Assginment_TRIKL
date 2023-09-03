import React, { useState } from "react";

const ResizableDiv = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(40);
  const [fontSize, setFontSize] = useState(16);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;

    const newWidth = width + (e.clientX - startX);
    const newHeight = height + (e.clientY - startY);

    setWidth(newWidth);
    setHeight(newHeight);

    const newFontSize = fontSize + (newWidth - width) / 5; // You can adjust the scaling factor as needed
    setFontSize(newFontSize);

    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsResizing(true);
  };

  return (
    <div
      className={`resizable-div ${isResizing ? "resizing" : ""}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <input
        type="text"
        placeholder="Resize me..."
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          fontSize: `${fontSize}px`,
        }}
      />
    </div>
  );
};

export default ResizableDiv;
