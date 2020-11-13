import React, { useState } from "react";

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "red", "green", "blue", "yellow"];
  const randomColor = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomColor];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink"; //getItem vào initColor và return initColor
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor(); //render new color
    setColor(newColor); //cập nhật lại color
    localStorage.setItem("box_color", newColor); //setItem lưu newcolor vào cái box-color
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
