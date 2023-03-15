const connection = require('../mysql.js')

const inserByIdNameandTime = (boardId, name, time) => {
    
    connection.query(`
    insert into score_board (initial_board_id, name, time)
    VALUES (${boardId},'${name}',${time})`, 
    function (err) {
        if (err) {
            console.log('err',err);

        } else {
            console.log('insert complete');

        }
    })
};

module.exports = {
    inserByIdNameandTime,
};