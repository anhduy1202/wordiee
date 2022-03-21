import React from "react";
import KeyBoard from "../KeyBoard/KeyBoard";
import Square from "../Square/Square";
import "./board.css";

interface IProps {
  board: String[];
}

const Board: React.FC<IProps> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="board">
        {board.map((square, idx) => {
          return (
            <>
              <Square val={board[idx]} />
            </>
          );
        })}
      </div>
      <div className="keyboard">
      <KeyBoard />
      </div>
    </>
  );
};

export default Board;
