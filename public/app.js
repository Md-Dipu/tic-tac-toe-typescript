"use strict";
const cells = document.getElementsByClassName('cell');
let player = true;
[...cells].forEach((cell) => {
    cell.addEventListener('click', (event) => {
        event.target.innerText = player ? 'X' : 'O';
        player = !player;
    });
});
