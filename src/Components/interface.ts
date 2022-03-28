interface boardState {
    board:string[],
    try: number,
    pos: number,
    key: string,
    correctWord:string,
}

export interface rootState {
    board: boardState
}