/** generate a 2D array of rows number of rows and cols number of columns all the elements of this array is 0 */
export const zeroesArray = (size: { rows: number, cols: number }): number[][] =>
    Array.from({ length: size.rows }).map(() =>
        Array.from({ length: size.cols }).map(() => 0));

/** make all elements 0 of the 2D array */
export const zeroesArrayReset = (array: number[][]): void => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] = 0;
        }
    }
};
