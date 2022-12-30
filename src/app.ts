import createBoard from './view/board';
import checkWinner from './actions/checkWinner';
import move from './actions/move';
import { getBoardData, setBoardData } from './utils/boardData';
import { zeroesArray, zeroesArrayReset } from './utils/zeroesArray';

const boardData = getBoardData();
createBoard(boardData); // creating board
const cells = document.getElementsByClassName('cell') as HTMLCollectionOf<HTMLDivElement>;

/**
 * @type {boolean} defining player's turn
 * @default true 
 * @description here true is for player-1 and false is for player-2
 */
let player: boolean = true;

const boardModal: number[][] = zeroesArray(boardData.size);

[...cells].forEach((cell: HTMLDivElement, index: number) => {
    cell.addEventListener('click', () => {
        if (move(player, cell)) {
            const row = Number(cell.getAttribute('data-row')) - 1;
            const col = Number(cell.getAttribute('data-col')) - 1;
            boardModal[row][col] = player ? 1 : 2;
            const isWinnerFound = checkWinner(boardModal, {
                player: boardModal[row][col],
                row,
                col
            }, boardData.winCase);

            if (isWinnerFound) {
                (document.getElementById('end-window') as HTMLDivElement).style.display = 'flex';
                (document.getElementById('won-status') as HTMLHeadingElement).innerText = `Player ${player ? 1 : 2} Won!`;
                return;
            }

            player = !player; // switching player
            (document.getElementById(`player${player ? 1 : 2}`) as HTMLDivElement).classList.add('turn');
            (document.getElementById(`player${player ? 2 : 1}`) as HTMLDivElement).classList.remove('turn');
        }
    });
});

// controls
const reset = (): void => {
    (document.getElementById('end-window') as HTMLDivElement).style.display = 'none';
    (document.getElementById('won-status') as HTMLHeadingElement).innerText = '';
    [...cells].forEach((cell: HTMLDivElement) => (cell.innerText = ''));
    zeroesArrayReset(boardModal);
    player = true;
};

// board configuration form on submit
const onSubmitHandler = (e: Event) => {
    e.preventDefault();
    const data: FormData = new FormData(e.target as HTMLFormElement);
    setBoardData({
        width: Number(data.get('width')),
        height: Number(data.get('height')),
        size: {
            rows: Number(data.get('rows')),
            cols: Number(data.get('cols'))
        },
        spaces: Number(data.get('spaces')),
        winCase: Number(data.get('win-case'))
    });
};

(document.getElementById('reset-btn') as HTMLButtonElement).addEventListener('click', reset);
(document.getElementById('re-play') as HTMLDivElement).addEventListener('click', reset);
(document.getElementById('board-config-form') as HTMLFormElement).addEventListener('submit', onSubmitHandler);