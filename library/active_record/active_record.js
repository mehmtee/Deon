const QueryBuilder = require('node-querybuilder');
let {settings} = require('./../../system/database');
settings = settings.active_record;
let db = new QueryBuilder(settings,'mysql','pool');

module.exports =db