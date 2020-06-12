// userstable
const Koa = require('koa');
const bodyParser  = require('koa-bodyparser');   //�����Ľ���
const path = require('path');
const cors = require('koa-cors');      //����������
const registerRouter = require('./registerRouterIndex');
const app = new Koa();
require('./creattable');
app.use(cors()); // ����������
app.use(bodyParser()); // body����
app.use(registerRouter());
app.listen(3001);
console.log("koa is listening in 3001");
