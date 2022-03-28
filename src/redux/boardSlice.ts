import { createSlice } from "@reduxjs/toolkit";
import wordList from "../words.json";
let randomNum = Math.floor(Math.random() * wordList.words.length);
const initialState = {
  board: 
["", "", "", "", "",
 "", "", "", "", "",
 "", "", "", "", "",
 "", "", "", "", "",
 "", "", "", "", "",
 "", "", "", "", ""],
  try: 0,
  pos: 0,
  key: "",
  correctWord: wordList.words[randomNum].toUpperCase()
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state,action) => {
        state.board = action.payload
    },
    incTry: (state) => {
      state.try+=1
    },
    incPos: (state) => {
      state.pos++
    },
    decPos: (state) => {
      state.pos--
    },
    setKey: (state,action) => {
      state.key = action.payload
    },
  }
});

export const {
    setBoard,
    setKey,
    incPos,
    decPos,
    incTry,
} = boardSlice.actions;
export default boardSlice.reducer;