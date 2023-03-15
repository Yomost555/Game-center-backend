const express = require('express');
const router = express();
const sudokuServices = require('../services/sudoku.js');

router.get('/sudoku', async (req, res) => {
    const outputData = await sudokuServices.getBoardData();
    res.json(outputData);
});

router.put('/sudoku', (req, res) => {
    res.send('success');
    data = req.body;
    // console.log(data);
    sudokuServices.sendPlayerData(data.id, data.name, data.time);

});

module.exports = router;