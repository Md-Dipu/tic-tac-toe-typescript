import createBoard from './view/board';
import checkWinner from './actions/checkWinner';
import move from './actions/move';
import { getBoardData, setBoardData } from './utils/boardData';

createBoard(getBoardData()); // creating board
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