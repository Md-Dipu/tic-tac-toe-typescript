const board = document.getElementById('t-g-board') as HTMLDivElement;

const createBoard = (n: number): void => {
    let cellNumber: number = 1;
    for (let i: number = 1; i <= n; i++) {
        for (let j: number = 1; j <= n; j++) {
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
