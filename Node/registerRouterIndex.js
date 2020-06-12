const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')
const registerRouter = () => {
    // let router = require('./admin');
    let routers = [];
    // glob.sync(resolve(__dirname, './', '**/*.js'))
    //     .filter(value => (value.indexOf('index.js') === -1))
    //     .map(router => {
    //         routers.push(require('router').routes())
    //         routers.push(require('router').allowedMethods())
    //     })


    routers.push(require('./admin').routes())
    routers.push(require('./admin').allowedMethods())
    return compose(routers)
}

module.exports = registerRouter;