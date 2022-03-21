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
  const [correct,setCorrect] = useState<Boolean>();
  const [almost,setAlmost] = useState<Boolean>();
  const key = useSelector((state: rootState) => state.board.key);

  useEffect(()=>{
    if (correctWord[(position - 1)%5] === val) {
      setCorrect(true)
      setAlmost(false)
    }
    else if (!correct && val !== "" && correctWord.includes(val)) {
      setCorrect(false);
      setAlmost(true)
    }
  },[val])
  const status: any = (correct ? "correct" : almost ? "almost" : "wrong");
  // if (position < 5) {
  //   correct = correctWord[position - 1] === val;
  //   const almost = !correct && val !== "" && correctWord.includes(val);
  //   if (almost && (Math.floor(position/5)) > state) {
  //     setStatus("almost");
  //   } else if (correct && (Math.floor(position/5)) > state) {
  //     setStatus("correct");
  //   } else {
  //     setStatus("wrong");
  //   }
  // } else {
  //   correct = correctWord[(position - 1) % 5] === val;
  //   const almost = !correct && val !== "" && correctWord.includes(val);
  //   if (almost && (Math.floor(position/5)) > state) {
  //     setStatus("almost");
  //   } else if (correct && (Math.floor(position/5)) > state) {
  //     setStatus("correct");
  //   } else {
  //     setStatus("wrong");
  //   }
  // }
  // useEffect(() => {
  //   let correct;
  //   console.log(state);
  //   if (position < 5) {
  //     correct = correctWord[position - 1] === val;
  //     const almost = !correct && val !== "" && correctWord.includes(val);
  //     if (almost && (Math.floor(position/5)) > state) {
  //       setStatus("almost");
  //     } else if (correct && (Math.floor(position/5)) > state) {
  //       setStatus("correct");
  //     } else {
  //       setStatus("wrong");
  //     }
  //   } else {
  //     correct = correctWord[(position - 1) % 5] === val;
  //     const almost = !correct && val !== "" && correctWord.includes(val);
  //     if (almost && (Math.floor(position/5)) > state) {
  //       setStatus("almost");
  //     } else if (correct && (Math.floor(position/5)) > state) {
  //       setStatus("correct");
  //     } else {
  //       setStatus("wrong");
  //     }
  //   }
  // }, [val]);

  return (
    <div className="square" id={status}>
      {val}
    </div>
  );
};

export default Square;
