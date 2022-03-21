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
  console.log("state: ", state)
  console.log(position)
  console.log("row: ", Math.floor(position/5))
  useEffect(()=>{
    if (correctWord[position%5] === val) {
      setCorrect(true)
    }
   else if (!correct && val !== "" && correctWord.includes(val)) {
      setAlmost(true)
    }
  },[val])
  const status: any = (correct ? "correct" : almost ? "almost" : "");

  return (
    <div className="square" id={state != 0 && state > Math.floor(position/5) ? status : ""}>
      {val}
    </div>
  );
};

export default Square;
