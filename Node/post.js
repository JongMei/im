const MysqlHelper = require('./mysqlHelper');
var Koa = require('koa');
var app = new Koa();
const Router = require('koa-router');
const http = require('http');
const url = require('url');
const DB = new MysqlHelper();
router.get('/userLogin',(ctx)=>{

})
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });

    // 解析 url 参数
    var params = url.parse(req.url, true).query;

    let voteDate = new Date().toLocaleDateString();

    let voteTime = new Date();

    let artId = params.sid;

    let addSql = 'INSERT INTO t_vote(Userid,ArtId,VoteDate,VoteTime) VALUES(?,?,?,?)';

    let addSqlParams = ['123123', artId, voteDate, voteTime];

    let selectSql = 'SELECT COUNT(*) AS c FROM t_vote WHERE UserId = 0 AND VoteDate = 0';

    let selectParams = ['123123', voteDate];

    let count;

    DB.connectionDB().then(() => {
        DB.querySql(selectSql, selectParams).then((data) => {
            count = data[0].c;
            console.log(count);
        }).then(() => {
            if (artId > 0 && count < 9)
                DB.querySql(addSql, addSqlParams);
        }).then(() => {
            DB.endDB()
        })
    })
}).listen(3001);