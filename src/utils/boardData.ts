import { BoardConfig } from "../interfaces/config";

const getBoardData = (): BoardConfig => {
    const configStr = localStorage.getItem('__board_config');
    if (configStr) return JSON.parse(configStr);
    return { width: 300, height: 300, size: { rows: 3, cols: 3 }, spaces: 4, winCase: 3 };
};

export { getBoardData };