const express = require('express');
const router = express();

const sudokuController = require('./sudoku.js');

const allControllers = [
    sudokuController,
];

router.use(allControllers);

module.exports = router;
