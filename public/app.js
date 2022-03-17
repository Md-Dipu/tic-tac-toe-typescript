import checkWinner from "./actions/checkWinner.js";
import move from "./actions/move.js";
const cells = document.getElementsByClassName('cell');
let player = true;
[...cells].forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (move(player, cell)) {
            player = !player; // switching player
            const checkingStatus = checkWinner([...cells], index + 1);
            if (checkingStatus.isFindWinner) {
                console.log(`Player ${checkingStatus.winner} is winner!`);
            }
        }
    });
});
// controls
document.getElementById('reset-btn').addEventListener('click', () => {
    [...cells].forEach((cell) => cell.innerText = '');
    player = true;
});
