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
