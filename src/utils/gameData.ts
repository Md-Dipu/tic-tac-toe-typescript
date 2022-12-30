import { Game } from "../interfaces/config";

export const getGameData = (): Game => {
    const data = JSON.parse(localStorage.getItem('__game_data') as any);
    return data;
};

export const setGameData = (data: Game): void => {
    localStorage.setItem('__game_data', JSON.stringify(data));
};

export const clearGameData = (): void => {
    localStorage.removeItem('__game_data');
};