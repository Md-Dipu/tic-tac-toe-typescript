import BoardConfig from './interfaces/config';
import createBoard from './view/board.js';
import checkWinner from './actions/checkWinner.js';
import move from './actions/move.js';

const boardConfig: BoardConfig = {
    size: 3,
};

createBoard(boardConfig); // creating board
const cells = document.getElementsByClassName('cell') as HTMLCollectionOf<HTMLDivElement>;

let player: boolean = true;

[...cells].forEach((cell: HTMLDivElement, index: number) => {
    cell.addEventListener('click', () => {
        if (move(player, cell)) {
            const checkingStatus = checkWinner([...cells], index + 1);
            if (checkingStatus.isFindWinner) {
                (document.getElementById('end-window') as HTMLDivElement).style.display = 'flex';
                (document.getElementById('won-status') as HTMLHeadingElement).innerText = `Player ${player ? 1 : 2} Won!`;
            }
            player = !player; // switching player
        }
    });
});

// controls
const reset = (): void => {
    (document.getElementById('end-window') as HTMLDivElement).style.display = 'none';
    (document.getElementById('won-status') as HTMLHeadingElement).innerText = '';
    [...cells].forEach((cell: HTMLDivElement) => (cell.innerText = ''));
    player = true;
};

(document.getElementById('reset-btn') as HTMLButtonElement).addEventListener('click', reset);
(document.getElementById('re-play') as HTMLDivElement).addEventListener('click', reset);
