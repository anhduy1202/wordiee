import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../interface";
import "./square.css";

interface IProps {
  val: string;
  squareIdx: number;
}

const Square: React.FC<IProps> = (props) => {
  const { val, squareIdx } = props;
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const position = useSelector((state: rootState) => state.board.pos);
  const state = useSelector((state: rootState) => state.board.try);

  let wordLastIndex = 4;
  let currentPos =
    position === 5
      ? wordLastIndex
      : position > 5 && position % 5 === 0
      ? wordLastIndex
      : (position % 5) - 1;
  const [correct, setCorrect] = useState<Boolean>(false);
  const [almost, setAlmost] = useState<Boolean>(false);
  const [wrong, setwrong] = useState<Boolean>(false);

  useEffect(() => {
    if (correctWord[currentPos] === val) {
      setCorrect(true);
    } else if (!correct && val !== "" && correctWord.includes(val)) {
      setAlmost(true);
    } else if (!correct && val !== "" && !correctWord.includes(val)) {
      setwrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setwrong(false);
    };
  }, [val]);
  const status: any =
    Math.floor(squareIdx / 5) < state &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");

  return (
    <>
      <div className="square" id={status}>
        {val}
      </div>
    </>
  );
};

export default Square;
