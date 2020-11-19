import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: "0px",
      top: "0px"
    });
  };

  const start = () => {
    setRenderBall(true);
  };

  const handleKeyPress = (event) => {
    let xCopy = x;
    let yCopy = y;

    if (event.keyCode === 39) {
      xCopy = x + 5;
      setX(xCopy);
    } else if (event.keyCode === 37) {
      xCopy = x - 5;
      setX(xCopy);
    } else if (event.keyCode === 38) {
      yCopy = y - 5;
      setY(yCopy);
    } else if (event.keyCode === 40) {
      yCopy = y + 5;
      setY(yCopy);
    }
    setBallPosition({
      left: `${xCopy}px`,
      top: `${yCopy}px`
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button onClick={start} className="start">
          Start
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
