const router = require('koa-router')();
const Sql = require('./sql');
const query = require('./query');
const jwt = require('jsonwebtoken');
const tbName = 'users';
const notoken = {
    code: 401,
    message: 'invalid token'
};
const preUrl = '/api/users';
function register(data) {
    return new Promise((resolve, reject) => {
        query(`select * from ${tbName} where name='${data.name}'`, function (res) {
            if (res.length == 0) {
                query(`insert into ${tbName} (name,password) values ('${data.name}','${data.password}')`, function (res) {
                    // let id = res.insertId;
                    resolve({
                        code: 200,
                        message: '注册成功'
                    })
                }, function (err) {
                    resolve({
                        code: 211,
                        message: '注册失败',
                        data: err
                    })
                })
            } else {
                resolve({
                    code: 212,
                    message: '该用户名已被注册'
                })
            }
        }, function (err) {
            resolve({
                code: 213,
                message: '数据库请求失败',
                data: err
            })
        })
    })
}

function signIn(name, pwd) {
    return new Promise((resolve, reject) => {
        query(`select * from ${tbName} where name='${name}' and password='${pwd}'`, function (res) {
            if (res.length == 0) {
                resolve({
                    code: 201,
                    message: '用户名密码错误'
                })
            } else {
                const token = jwt.sign({id: res[0].id}, 'token', {expiresIn: '15d'})
                resolve({
                    code: 200,
                    message: '登录成功',
                    data: {
                        user: res[0],
                        token: token
                    }
                })
            }
        }, function (err) {
            resolve({
                code: 202,
                message: '登录失败,请稍后重新再试',
                data: err
            })
        })
    })
}

router.get('/', async (ctx, next) => {
    ctx.body = '9090'
})
    .post('/api/signIn', async (ctx, next) => { //登录
        let now = new Date();
        let str = now.toLocaleDateString().replace(/\//g, "-") + ' ' + now.toTimeString().substr(0, 8);
        let obj = {
            lastSign: str
        }
        let data = await signIn(ctx.request.body.name, ctx.request.body.password);
        // let update = await Sql.update(tbName, data.data.user.id, obj);
        ctx.body = data;
    })
    .post(`${preUrl}/register`, async (ctx, next) => { //注册
        let data = await register(ctx.request.body);
        ctx.body = data;
    })
module.exports = router;