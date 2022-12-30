export interface BoardConfig {
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
