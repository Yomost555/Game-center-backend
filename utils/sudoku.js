const {sudokuBoard} = require('../data/sudoku.js');

function randomBoard() {
    const boardLen = sudokuBoard.length;
    const randomNum = Math.floor(Math.random()*boardLen);
    console.log(randomNum);

    return(sudokuBoard[randomNum]);
}

module.exports = {
    randomBoard,
}
