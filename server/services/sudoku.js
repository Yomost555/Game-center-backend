const initialBoardUtils = require('../utils/initial_board.js');
const initialBoardDomain = require('../domain/initial_board.js');
const scoreBoardDomain = require('../domain/score_board.js');

const getBoardData = async () => {
    queryBoardData = await initialBoardDomain.getBoard();
    const board = initialBoardUtils.randomBoard(queryBoardData);
    // console.log(board);
    return board;
    
}

const sendPlayerData = (id, name, time) => {
    scoreBoardDomain.inserByIdNameandTime(id, name, time);
}

module.exports = {
    getBoardData,
    sendPlayerData,
}
