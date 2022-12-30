import { Move } from '../interfaces/config';

const checkWinner = (boardModal: number[][], move: Move, winCase: number): boolean => {
    let matchCounter: number = 1;

    // check all the possible cases for last move for current player
    // checking horizontal cases
    // checking forward cells
    for (let i = move.col + 1; i < boardModal[0].length; i++) {
        if (boardModal[move.row][i] === move.player) {
            if (++matchCounter === winCase) return true;
            continue;
        }

        break;
    }

    // checking backward cells
    for (let i = move.col - 1; i >= 0; i--) {
        if (boardModal[move.row][i] === move.player) {
            if (++matchCounter === winCase) return true;
            continue;
        }

        break;
    }

    // checking vertical cases
    matchCounter = 1;

    // checking upward cells
    for (let i = move.row - 1; i >= 0; i--) {
        if (boardModal[i][move.col] === move.player) {
            if (++matchCounter === winCase) return true;
            continue;
        }

        break;
    }

    // checking downward cells
    for (let i = move.row + 1; i < boardModal.length; i++) {
        if (boardModal[i][move.col] === move.player) {
            if (++matchCounter === winCase) return true;
            continue;
        }

        break;
    }

    // checking x-case

    // checking \-case
    matchCounter = 1;

    // checking \-case upward cells
    for (let i = move.row - 1, j = move.col - 1; i >= 0 && j >= 0; i--, j--) {
        if (boardModal[i][j] === move.player) {
            if (++matchCounter === winCase) return true;
            continue;
        }

        break;
    }

    // checking \-case downward cells
    for (let i = move.row + 1, j = move.col + 1; i < boardModal.length && j < boardModal[0].length; i++, j++) {
        if (boardModal[i][j] === move.player) {
            if (++matchCounter === winCase) return true;
            continue;
        }

        break;
    }

    // checking /-case
    matchCounter = 1;

    // checking /-case upward cells
    for (let i = move.row - 1, j = move.col + 1; i >= 0 && j < boardModal[0].length; i--, j++) {
        if (boardModal[i][j] === move.player) {
            if (++matchCounter === winCase) return true;
            continue;
        }

        break;
    }

    // checking /-case downward cells
    for (let i = move.row + 1, j = move.col - 1; i < boardModal.length && j >= 0; i++, j--) {
        if (boardModal[i][j] === move.player) {
            if (++matchCounter === winCase) return true;
            continue;
        }

        break;
    }

    // default case false if no case matched
    return false;
};

export default checkWinner;
