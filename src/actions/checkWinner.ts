import { CheckWinnerStatus } from '../interfaces/status';

type winningCase = number[];

const allPossibleCases: Array<winningCase> = [
    // rows
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    // columns
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    // x-case
    [1, 5, 9],
    [3, 5, 7]
];

const checkWinner = (cells: Array<HTMLDivElement>, cellNumber: number): CheckWinnerStatus => {
    const status: CheckWinnerStatus = {
        isFindWinner: false,
        winner: null
    };

    const possibleCases = allPossibleCases.filter((ca: winningCase) => ca.includes(cellNumber));
    status.isFindWinner = possibleCases.some((ca: winningCase) => {
        const values: string[] = ca.map(c => cells[c - 1].innerText);
        const winner = values.reduce((a: string, b: string) => (a === b) ? a : '');
        if (winner) status.winner = winner === 'X' ? 1 : 2;
        return winner;
    });

    return status;
};

export default checkWinner;