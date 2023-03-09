const express = require('express');
const cors = require('cors')
const {randomBoard} = require('../utils/sudoku.js');
const {addStatsByNameAndTimeUsingID} = require('../utils/sudoku-stats.js')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Hello`);
});

app.get('/sudoku', (req, res) => {
    res.json(randomBoard());
});

app.put('/sudoku', (req, res) => {
    res.send('success');
    data = req.body;
    console.log(data)

    addStatsByNameAndTimeUsingID(data.id, data.name, data.time);
});

app.listen(3005, () => {
    console.log('port 3005 connecting');
});
