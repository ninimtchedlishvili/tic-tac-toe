import React, { useState, useEffect } from "react";

const GameLogic = ({ button, row, col }) => {
  const [value, setValue] = useState("");

  const setX = () => {
    setValue(`${button} X`);
  };

  const setO = () => {
    setValue(`${button} O`);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <button onClick={setX} key={button}>
        asd
      </button>
    </div>
  );
};

export default GameLogic;
