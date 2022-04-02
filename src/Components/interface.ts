interface boardState {
    board: string[],
    pos: number,
    row: number,
    correctWord: string,
    key: string
}

export interface rootState {
    board: boardState
}