import React, { useState, useEffect } from "react";

const HexColorGenerator = () => {
  const [color, setColor] = useState("");

  const getRgb = () => Math.floor(Math.random() * 256);

  const rgbToHex = (r: number, g: number, b: number) =>
    "#" +
    [r, g, b]
      .map((x: number) => {
        const hex = x.toString(16);
        console.log(hex, "hex");
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  const handleGenerator = () => {
    const newColor = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };
    console.log(newColor, "newColor");
    setColor(rgbToHex(newColor.r, newColor.g, newColor.b));
  };
  console.log(color, "setColor");
  setTimeout(() => {
    handleGenerator();
  }, 2000);
  //   useEffect(() => {
  //     handleGenerator();
  //   }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      {color}
      {/* <button
        className="color-button "
        style={{
          color: color,
          width: "100px",
          height: "50px",
          border: "2px solid black",
          marginBottom: "20px",
        }}
        onClick={handleGenerator}
      >
        {color}
      </button> */}
      <div
        className="para"
        style={{ background: color, width: "100%", height: "500px" }}
      >
        <p>This is my color genrater</p>
      </div>
    </div>
  );
};

export default HexColorGenerator;
