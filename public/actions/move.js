const move = (player, moveField) => {
    if (!moveField.innerText) {
        moveField.innerText = player ? 'X' : 'O';
        return true;
    }
    return false;
};
export default move;
