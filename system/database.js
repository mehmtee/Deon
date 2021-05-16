const settings = {}

settings.active_record = {
    type : 'mysql',
    host: 'localhost',
    database: 'exampledb',
    user: 'root',
    password: '12345678'
};



settings.mongodb = {
    database : 'mongodb://localhost:27017/exampledb',

}


module.exports = {settings};

/* 

More settings : https://www.npmjs.com/package/node-querybuilder



*/