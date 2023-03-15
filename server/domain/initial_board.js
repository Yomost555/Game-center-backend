const connection = require('../mysql.js')

const getBoard = async () => {

    const sudokuBoard = await new Promise((resolve, reject) => {
        connection.query(`
        select
            initial_board.id,
            initial_board.pattern as initial_pattern,
            solution_board.pattern as solution_pattern
        from
            initial_board
            JOIN solution_board on initial_board.id = solution_board.initial_board_id`, 
        function (err, data) {
            if (err) {
                reject(err);
            //   req.flash('error', err)
            //   res.render('profile', { data: '' })
            } else {
            //   res.render('profile', { data: rows })
                // res.json(initialBoardUtils.randomBoard(data));
                resolve(data);
                // return randomBoard(sudokuBoard);
            }
        })
    })

    console.log('sudokuBoard', sudokuBoard);
    return(sudokuBoard);
};

module.exports = {
    getBoard,
};
