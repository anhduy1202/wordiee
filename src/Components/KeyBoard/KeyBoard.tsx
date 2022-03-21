import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decPos, incTry, setBoard, setKey } from "../../redux/boardSlice";
import { rootState } from "../interface";
import Key from "../Key/Key";
import "./keyboard.css";

const KeyBoard: React.FC = () => {
  const dispatch = useDispatch();
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.pos);
  const key = useSelector((state: rootState) => state.board.key);

  const rows = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"];

  const clickEnter = () => {
    if (key !== "Enter") {
      if ((position+1) % 5 == 0 && (position+1) !== 0) {
        dispatch(incTry());
      }
    }
    dispatch(setKey("Enter"));
  };

  const clickBack = () => {
    if (position+1 == 0) return;
    const newBoard = [...board];
    newBoard[position] = "";
    dispatch(decPos());
    dispatch(setBoard(newBoard));
  };

  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <div className="row">
            {idx == 2 && (
              <span className="letter-row" onClick={clickEnter}>
                {idx === 2 && "Enter"}{" "}
              </span>
            )}
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toUpperCase()} />
                  {letter == "m" && <span onClick={clickBack}> Back </span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;
