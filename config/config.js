const {main_path} = require('../mainPath')

const config = {
    port : 3000,
    
    
    /* Database settings*/
    mongodb: false,
    active_record: false,
    mysql: false,
    mongodb_library : main_path + "/library/mongodb/mongodb.js", //on library folder
    active_record_library : main_path + "/library/active_record/active_record.js",

    /* Path settings*/
    view_engine : "ejs",
    view_path : main_path + "/app/views",
    static_path : main_path + "/public"

}

config.main_path = main_path








module.exports = { config }



