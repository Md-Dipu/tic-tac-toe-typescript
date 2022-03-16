import move from "./actions/move.js";
const cells = document.getElementsByClassName('cell');
let player = true;
[...cells].forEach((cell) => {
    cell.addEventListener('click', () => {
        if (move(player, cell))
            player = !player;
    });
});
