const cells: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');

let player: boolean = true;

[...cells].forEach((cell: Element) => {
    cell.addEventListener('click', (event: Event) => {
        (event.target as any).innerText = player ? 'X' : 'O';
        player = !player;
    });
});