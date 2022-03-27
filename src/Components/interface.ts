interface boardState {
    board:string[],
    try: number,
    pos: number,
    key: string,
    correctWord:string,
    validWords: boolean
}

export interface rootState {
    board: boardState
}