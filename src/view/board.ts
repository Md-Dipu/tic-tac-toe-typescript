import { Board } from '../interfaces/config';

const board = document.getElementById('t-g-board') as HTMLDivElement;

const createBoard = (boardConfig: Board): void => {
    const root = document.documentElement as HTMLElement;
    root.style.setProperty('--board-width', `${boardConfig.width}px`);
    root.style.setProperty('--board-height', `${boardConfig.height}px`);
    root.style.setProperty('--cell-width', `${(boardConfig.width / boardConfig.size.rows) - boardConfig.spaces}px`);
    root.style.setProperty('--cell-height', `${(boardConfig.height / boardConfig.size.cols) - boardConfig.spaces}px`);

    let cellNumber: number = 1;
    for (let i: number = 1; i <= boardConfig.size.rows; i++) {
        for (let j: number = 1; j <= boardConfig.size.cols; j++) {
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
