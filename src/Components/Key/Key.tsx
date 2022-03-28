import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incPos,
  setBoard,
  setKey,
} from "../../redux/boardSlice";
import { rootState } from "../interface";
import "./key.css";
interface IProps {
  letter: string;
}

const Key: React.FC<IProps> = (props) => {
  const { letter } = props;
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.pos);
  const key = useSelector((state: rootState) => state.board.key);
  const state = useSelector((state: rootState) => state.board.try);
  const dispatch = useDispatch();
  const chooseLetter = () => {
    if (position >= 30) return;
    else if (key === "Enter") {
      const newBoard = [...board];
      newBoard[position] = letter;
      dispatch(setBoard(newBoard));
      dispatch(incPos());
      dispatch(setKey(""));
    } else {
      if (Math.floor(position/5) > state) {
        return;
      };
      const newBoard = [...board];
      newBoard[position] = letter;
      dispatch(setBoard(newBoard));
      dispatch(incPos());
    }
  };
  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
