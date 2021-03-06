const allPossibleCases = [
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
const checkWinner = (cells, cellNumber) => {
    const status = {
        isFindWinner: false,
        winner: null
    };
    const possibleCases = allPossibleCases.filter((ca) => ca.includes(cellNumber));
    status.isFindWinner = possibleCases.some((ca) => {
        const values = ca.map(c => cells[c - 1].innerText);
        const winner = values.reduce((a, b) => (a === b) ? a : '');
        if (winner)
            status.winner = winner === 'X' ? 1 : 2;
        return winner;
    });
    return status;
};
export default checkWinner;
