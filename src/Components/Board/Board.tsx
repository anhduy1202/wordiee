import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../interface";
import KeyBoard from "../KeyBoard/KeyBoard";
import Square from "../Square/Square";
import "./board.css";

interface IProps {
  board: string[];
}

const Board: React.FC<IProps> = (props) => {
  const { board } = props;

  return (
    <>
      <div className="board">
        {board.map((square, idx) => {
          return (
            <>
              <Square val={board[idx]} squareIdx={idx}/>
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
