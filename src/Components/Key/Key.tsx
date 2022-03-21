import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decPos,
  incPos,
  incTry,
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
  const state = useSelector((state: rootState) => state.board.try);
  const position = useSelector((state: rootState) => state.board.pos);
  const key = useSelector((state: rootState) => state.board.key);
  const dispatch = useDispatch();
  const chooseLetter = () => {
    if ((position+1) >= 30) return;
    else if (key == "Enter") {
      const newBoard = [...board];
      newBoard[position+1] = letter;
      dispatch(setBoard(newBoard));
      dispatch(incPos());
      dispatch(setKey(""));
    } else {
      if ((position+1) % 5 == 0 && (position+1) !== 0) return;
      const newBoard = [...board];
      newBoard[position+1] = letter;
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
