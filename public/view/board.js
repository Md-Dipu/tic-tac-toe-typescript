const board = document.getElementById('t-g-board');
const createBoard = (boardConfig) => {
    let cellNumber = 1;
    for (let i = 1; i <= boardConfig.size; i++) {
        for (let j = 1; j <= boardConfig.size; j++) {
            const div = document.createElement('div');
            div.classList.add('cell');
            div.setAttribute('data-cell', `${cellNumber++}`);
            div.setAttribute('data-row', `${i}`);
            div.setAttribute('data-col', `${j}`);
            board.appendChild(div);
        }
    }
};
export default createBoard;
