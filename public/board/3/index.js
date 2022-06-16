import checkWinner from "../../actions/checkWinner.js";
import move from "../../actions/move.js";
const cells = document.getElementsByClassName('cell');
let player = true;
[...cells].forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (move(player, cell)) {
            const checkingStatus = checkWinner([...cells], index + 1);
            if (checkingStatus.isFindWinner) {
                document.getElementById('end-window').style.display = 'flex';
                document.getElementById('won-status').innerText = `Player ${player ? 1 : 2} Won!`;
            }
            player = !player; // switching player
        }
    });
});
// controls
const reset = () => {
    document.getElementById('end-window').style.display = 'none';
    document.getElementById('won-status').innerText = '';
    [...cells].forEach((cell) => cell.innerText = '');
    player = true;
};
document.getElementById('reset-btn').addEventListener('click', reset);
document.getElementById('re-play').addEventListener('click', reset);
