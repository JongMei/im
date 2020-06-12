// userstable
const Koa = require('koa');
const bodyParser  = require('koa-bodyparser');   //上下文解析
const path = require('path');
const cors = require('koa-cors');      //跨域访问组件
const registerRouter = require('./registerRouterIndex');
const app = new Koa();
require('./creattable');
app.use(cors()); // 允许跨域访问
app.use(bodyParser()); // body解析
app.use(registerRouter());
app.listen(3001);
console.log("koa is listening in 3001");
