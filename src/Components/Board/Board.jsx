import React from "react";
import GameLogic from "../GameLogic/GameLogic";

const Board = () => {
  const rows = [1, 2, 3];
  const cols = [1, 2, 3];

  return (
    <>
      <div className="flex flex-col gap-4">
        {rows.map((i) => (
          <div key={i} className="flex  gap-4">
            {cols.map((j) => (
              <div
                key={`${i}-${j}`}
                className="flex items-center justify-center p-[70px] bg-[#006400] text-white rounded-3xl"
              >
                <GameLogic button={`${i}${j}`} row={i} col={j} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
