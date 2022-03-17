import checkWinner from "./actions/checkWinner.js";
import move from "./actions/move.js";

const cells = document.getElementsByClassName('cell') as HTMLCollectionOf<HTMLDivElement>;

let player: boolean = true;

[...cells].forEach((cell: HTMLDivElement, index: number) => {
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
(document.getElementById('reset-btn') as HTMLButtonElement).addEventListener('click', () => {
    [...cells].forEach((cell: HTMLDivElement) => cell.innerText = '');
    player = true;
});