const express = require('express');
const app = express();
const router = express.Router();
const { config } = require('./../config/config');
const path = require('path');

var morgan = require('morgan')

const session = require('express-session');

app.use(session({
    secret: 'Özel-Anahtar',
    resave: false,
    saveUninitialized: true
  }));
  


let db = {}
app.set('view engine', 'ejs');
app.set('views', config.view_path);
app.use(express.static(config.static_path));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.json());

if (config.mongodb) {


    const mongoose = require('mongoose');
    let { settings } = require('./database')


    let mongoconfig = settings.mongodb
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect(mongoconfig.database, (err, res) => {
        if (err) console.log(err);
    })



    db.mongoose = mongoose;
    //db.mongodb = require(config.mongodb_library);
}

if (config.active_record) db.active_record = require(config.active_record_library);
app.listen(config.port, () => {
console.log("System now active localhost:3000")
});

module.exports = { app, db, router, express, session }







