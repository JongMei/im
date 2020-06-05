const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

// 首页路由
let router = new Router();
router.get('/', ctx => {
    ctx.response.type = 'html';
    ctx.response.body = 'index.html';
});
app.use(router.routes());

// socket连接
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// 监听端口
server.listen(3001, () => {
    console.log('listening on *:3001');
});