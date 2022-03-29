interface boardState {
    board: string[],
    pos: number
}

export interface rootState {
    board: boardState
}