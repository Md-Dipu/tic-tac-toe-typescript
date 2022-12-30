import { Game } from "../interfaces/config";

const initBoard = (gameData: Game): void => {
    const cells = document.getElementsByClassName('cell') as HTMLCollectionOf<HTMLDivElement>;

    // board initializer
    let index: number = 0;
    for (let i = 0; i < gameData.modal.length; i++) {
        for (let j = 0; j < gameData.modal[0].length; j++) {
            const cellValues = ['', 'X', 'O'];
            cells[index].innerText = cellValues[gameData.modal[i][j]];
            index++;
        }
    }
};

export default initBoard;
