const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '192.168.1.250',
    user: 'mysqladmin',
    password: '123456',
    database: 'dbjxqy4'
});


function DB() {
    this.connectionDB = () => {
        return new Promise(resolve => {
            connection.connect();
            resolve();
        })
    }

    this.endDB = () => {
        return new Promise(resolve => {
            connection.end();
            resolve();
        })
    }

    this.querySql = (sql, params) => {
        return new Promise(resolve => {
            connection.query(sql, params, (e, result) => {
                if (e) {
                    throw e;
                }
                resolve(result);
                console.log(sql);
            });
        })
    }
}



module.exports = DB;