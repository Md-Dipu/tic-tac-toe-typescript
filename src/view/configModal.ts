import { Board } from "../interfaces/config";

const modal = document.getElementById('config-modal') as HTMLDivElement;
const form = document.getElementById('board-config-form') as HTMLFormElement;
const inputs = form.getElementsByTagName('input') as HTMLCollectionOf<HTMLInputElement>;

export const loadValues = (data: Board) => {
    [
        data.width,
        data.height,
        data.size.rows,
        data.size.cols,
        data.spaces,
        data.winCase
    ].forEach((value, _idx) => {
        inputs[_idx].value = String(value)
    });
};

export const switchModal = () => {
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}