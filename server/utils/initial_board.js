function randomBoard(objBoard) {
    // console.log(objBoard);
    const boardLen = objBoard.length;
    const randomNum = Math.floor(Math.random()*boardLen);
    // console.log(boardLen, randomNum);
    Rboard = [];
    Iboard = [];

    for (let i = 0; i < 9; i++) {
        lineR = [];
        lineI = [];
        for (let j = 0; j < 9; j++) {
            lineR.push(parseInt(objBoard[randomNum].solution_pattern[9*i+j]));
            lineI.push(parseInt(objBoard[randomNum].initial_pattern[9*i+j]));
        }
        // console.log('lineR',lineR)
        Rboard.push(lineR);
        Iboard.push(lineI);
    }
    

    returnObj = {
        id: objBoard[randomNum].id,
        Rboard,
        Iboard,
    };

    return(returnObj);
}

module.exports = {
    randomBoard,
}
