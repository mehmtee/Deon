let { db } = require('./../../system/system');
const usrModel = {}




usrModel.get = (callback,id=0) => {
    let users = [];
    callback(users)
}



//example active record
// db =  db.active_record;

// 

// usrModel.get = (callback,id=0) =>{
    
//     db.get_connection((e) => {
//         if(id) e.where('id',id) 
//         e.get("users",(err,response) => callback(response))
//         e.release(); 
//     })

// }




module.exports ={usrModel}