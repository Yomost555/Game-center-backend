const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'api',
    password: 'api',
    port: 3305,
    database: 'game-center',
})
connection.connect((err) => {
    if (err){
        console.log('err', err)
        return
    }
    console.log('Databasr connected')
})

module.exports = connection