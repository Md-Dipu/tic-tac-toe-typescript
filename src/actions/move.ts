const move = (player: boolean, moveField: HTMLDivElement): boolean => {
    if (!moveField.innerText) {
        moveField.innerText = player ? 'X' : 'O';
        return true;
    }
    return false;
}

export default move;