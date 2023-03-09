const { formatStrategyValues } = require('rc-tree-select/lib/utils/strategyUtil');
const {stats} = require('../data/sudoku-stats.js');
const fs = require('fs')

function addStatsByNameAndTimeUsingID(id, name, time) {
    let tempStats = stats;
    const n = tempStats.length; 
    const dataToAdd = {
        name,
        time
    }

    for (let i = 0; i < n; i++){
        if(tempStats[i].boardID === id){
            tempStats[i].NameAndTime.push(dataToAdd);
            break;
        }
    }

    tempStatsString = 'stats = ' + JSON.stringify(tempStats, null, 2);
    ending = 'module.exports = {stats, }'

    dataToWriteFile = tempStatsString + '\n\n' + ending;

    console.log('dataToWriteFile \n', dataToWriteFile)
    fs.writeFile('../data/sudoku-stats.js', dataToWriteFile, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File written successfully\n");
        }
    });
}

module.exports = {
    addStatsByNameAndTimeUsingID,
}