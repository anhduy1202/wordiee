import React from "react";
import Key from "../Key/Key";
import {useSelector, useDispatch} from "react-redux";
import "./keyboard.css";
import { rootState } from "../interface";
import { decPos, setBoard } from "../../redux/boardSlice";

const KeyBoard: React.FC = () => {
  const position = useSelector((state:rootState)=>state.board.pos);
  const board = useSelector((state:rootState)=>state.board.board);
  const dispatch = useDispatch();
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  const clickBack = () => {
    if (position <= 0) return;
    const newBoard = [...board];
    newBoard[position-1] = "";
    dispatch(decPos());
    dispatch(setBoard(newBoard));
  }
  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <div className="row">
              {idx === 2 && (
                  <span className="letter-row">
                      Enter
                  </span>
              )
              }
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={clickBack}> Back </span>}
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
