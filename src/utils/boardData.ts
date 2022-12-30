import { Board } from "../interfaces/config";
import { clearGameData } from "./gameData";

const getBoardData = (): Board => {
    const configStr = localStorage.getItem('__board_config');
    if (configStr) return JSON.parse(configStr);
    return { width: 300, height: 300, size: { rows: 3, cols: 3 }, spaces: 4, winCase: 3 };
};

const setBoardData = (data: Board): void => {
    localStorage.setItem('__board_config', JSON.stringify(data));
    clearGameData();
    location.reload();
};

export { getBoardData, setBoardData };