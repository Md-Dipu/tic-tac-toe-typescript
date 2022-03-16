import move from "./actions/move.js";

const cells = document.getElementsByClassName('cell') as HTMLCollectionOf<HTMLDivElement>;

let player: boolean = true;

[...cells].forEach((cell: HTMLDivElement) => {
    cell.addEventListener('click', () => {
        if (move(player, cell))
            player = !player;
    });
});