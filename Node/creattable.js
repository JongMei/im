const query = require('./query');
const tables = {
    users: 'create table if not exists `users`(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,`name` VARCHAR(20) NOT NULL,`password` VARCHAR(20) NOT NULL,`avator` VARCHAR(255) DEFAULT "default.jpg");',//好友列表
    frendlist: 'create table if not exists `frendlist`(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,`openID`	varchar(20),`friendID`	varchar(20),`Delete`  float,`Deleted`  float);'
};
// Delete   是否删除   Deleted 是否被删除
const createTable = function (tb) {
    query(tb, function (res) {
        return true;
    }, function (err) {
        console.log('建表失败', err);
        return false;
    })
}

for (let key in tables) {
    if (tables.hasOwnProperty(key)) {
        createTable(tables[key]);
    }
}