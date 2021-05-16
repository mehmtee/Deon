const mongoose = require('mongoose');
let {settings} = require('../../system/database')


let config = settings.mongodb
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const mongodb = mongoose.connect(config.database,(err,res) => {
    if(err) console.log(err);
})

//  class newMongo{

//     constructor(url){
//         this.url = url;
//     }

//     connect(callback){
//         mongoose.connect(this.url,callback,{ useNewUrlParser: true });
//     }


// }

module.exports = mongodb;
