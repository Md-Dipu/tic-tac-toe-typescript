export interface Board {
    width: number;
    height: number;
    size: {
        rows: number;
        cols: number;
    };
    spaces: number;
    winCase: number;
}

export interface Move {
    row: number;
    col: number;
    player: number;
}

export interface Game {
    modal: number[][];
    turn: boolean;
    moves: number;
}
