import { latest } from "immer/dist/internal";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../interface";
import "./square.css";

interface IProps {
  val: string;
}

const Square: React.FC<IProps> = (props) => {
  const { val } = props;
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const position = useSelector((state: rootState) => state.board.pos);
  const state = useSelector((state: rootState) => state.board.try);
  const key = useSelector((state: rootState) => state.board.key);
  const [status, setStatus] = useState<any>("");
  useEffect(() => {
    let correct;
    if (position < 5) {
      correct = correctWord[position - 1] === val;
      const almost = !correct && val !== "" && correctWord.includes(val);
      if (almost) {
        setStatus("almost");
      } else if (correct) {
        setStatus("correct");
      } else {
        setStatus("wrong");
      }
    } else {
      correct = correctWord[(position - 1) % 5] === val;
      const almost = !correct && val !== "" && correctWord.includes(val);
      if (almost) {
        setStatus("almost");
      } else if (correct) {
        setStatus("correct");
      } else {
        setStatus("wrong");
      }
    }
  }, [val]);

  return (
    <div className="square" id={status}>
      {val}
    </div>
  );
};

export default Square;
