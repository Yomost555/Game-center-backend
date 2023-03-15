const express = require('express');
const cors = require('cors');
const controllers = require('./controllers');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log('Hello');
});

app.use(controllers);

app.listen(3005, () => {
    console.log('port 3005 connecting');
});
