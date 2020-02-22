const pool = require("../../config/database");

module.exports = {
    create: (data, callBack)=>{
        pool.query(
            "insert into user(name,email,password)values(?,?,?)",
            [
                data.name,
                data.email,
                data.password
            ],(error, results, fields)=>{
                if(error){
                 return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}