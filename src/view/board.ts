import BoardConfig from '../interfaces/config';

const board = document.getElementById('t-g-board') as HTMLDivElement;

const createBoard = (boardConfig: BoardConfig): void => {
    let cellNumber: number = 1;
    for (let i: number = 1; i <= boardConfig.size; i++) {
        for (let j: number = 1; j <= boardConfig.size; j++) {
            const div: HTMLDivElement = document.createElement('div');
            div.classList.add('cell');
            div.setAttribute('data-cell', `${cellNumber++}`);
            div.setAttribute('data-row', `${i}`);
            div.setAttribute('data-col', `${j}`);
            board.appendChild(div);
        }
    }
};

export default createBoard;
