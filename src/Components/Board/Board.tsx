import React from "react";
import Square from "../Square/Square";
import "./board.css";

interface IProps {
  board: String[];
}

const Board: React.FC<IProps> = (props) => {
  const { board } = props;
  return (
    <div className="board">
        {board.map((square, idx) => {
          return (
            <>
              <Square val={board[idx]} />
            </>
          );
        })}
    </div>
  );
};

export default Board;
