const query = require('./query');
const mysql = require('mysql')
const config = require('./config').database
const pool = mysql.createPool(config);
const Sql = {
    insert:function(tb,data){  //插入一条记录
        return new Promise((resolve,reject)=>{
            let [keys,values] = [[],[]];
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    keys.push(key);
                    if (Object.prototype.toString.call(data[key]) == '[object String]') {
                        values.push(`"${data[key]}"`)
                    }else {
                        values.push(data[key])
                    }
                }
            }
            query(`insert into ${tb} (${keys}) values (${values})`,function(res){
                let id = res.insertId;
                console.log()
                let data = {
                    code:200,
                    message:'添加成功',
                    data:res
                }
                query(`select * from ${tb} where id=${id}`,function(res){
                    data.data = res[0];
                    resolve(data);
                },function(err){
                    resolve(data);
                })
            },function(err){
                resolve(err);
            })
        })
    },
    update:function(tb,id,data){ //根据id修改单条记录
        return new Promise((resolve,reject)=>{
            let [str,index] = ['',0];
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    if (index!=0) {
                        str += ','
                    }
                    if (Object.prototype.toString.call(data[key]) == '[object String]'){
                        str += `${key}="${data[key]}"`
                    }
                    else {
                        str += `${key}=${data[key]}`
                    }
                    index++;
                }
            }
            query(`update ${tb} set ${str} where id=${id}`,function(res){
                let data = {
                    code:200,
                    message:'修改成功',
                    data:res
                }
                query(`select * from ${tb} where id=${id}`,function(res){
                    data.data = res[0];
                    resolve(data);
                },function(err){
                    resolve(data);
                })
            },function(err){
                resolve(err);
            })
        })
    },
    search:function(tb,data,foreign){ //根据条件准确查询
        let queryStr = '';//查询条件
        for (let key in data) {
            queryStr += `${key}=${data[key]}&`;
        }
        queryStr = queryStr.substr(0,queryStr.length-1);
        let str;
        if (foreign) {
            str = getForeignInfo(tb,data,foreign);
        }else {
            str = `select * from ${tb} where ${queryStr}`
        }
        return new Promise((resolve,reject)=>{
            query(str,function(res){
                resolve({
                    code:200,
                    message:'获取成功',
                    data:res
                });
            },function(err){
                resolve(err);
            });
        })
    }
}
module.exports = Sql;