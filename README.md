# Deon
 Deon is simple mvc framework for Express Js
 
 
 npm install
 node app.js
 
 Welcome Deon
Deon is simple mvc framework for Express Js

call at the top of the page : const { router,db ... example libraries } = require('./../../system/system');

Main middleware : middleware/root.js

For settings : config/config.js

db = { mongoose, active_record }

For active record see here :https://www.npmjs.com/package/node-querybuilder

For mongoose see here : https://www.npmjs.com/package/mongoose

Default Template Engine : ejs, if you want change -> config/config.js ->view_engine : "pub"

If you want to include more libraries call over there : system/system.js and next module.exports = { app, db, router, express, session, yourlibraries... }
