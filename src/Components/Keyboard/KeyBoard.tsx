import React from "react";
import Key from "../Key/Key";
import {useSelector, useDispatch} from "react-redux";
import "./keyboard.css";
import wordList from "../../words.json";
import { rootState } from "../interface";
import { decPos, incRow, setBoard } from "../../redux/boardSlice";

const KeyBoard: React.FC = () => {
  const position = useSelector((state:rootState)=>state.board.pos);
  const board = useSelector((state:rootState)=>state.board.board);
  const row = useSelector((state:rootState) => state.board.row);
  const correctWord = useSelector((state:rootState)=>state.board.correctWord);
  const dispatch = useDispatch();
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  let allWords: string[] = wordList.words;
  let board5Words: string = `${board[position-5]}${board[position-4]}${board[position-3]}${board[position-2]}${board[position-1]}`.toLowerCase();
  const clickBack = () => {
    if (Math.floor((position-1)/5) < row) return;
    const newBoard = [...board];
    newBoard[position-1] = "";
    dispatch(decPos());
    dispatch(setBoard(newBoard));
  }
  const clickEnter = () => {
    if (allWords.includes(board5Words) === false) {
      alert("Invalid words");
    }
    if(allWords.includes(board5Words)) {
      if (position % 5 === 0 && position !== 0) {
       dispatch(incRow());
    }
  }
    if(position === 30 && allWords.includes(board5Words)) {
      alert("The word is: " + correctWord);
    }
  }
  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <div className="row">
              {idx === 2 && (
                  <span className="letter-row" onClick={clickEnter}>
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
