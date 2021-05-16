const { app, express, db,session,system_os} = require('../../system/system');
const userController = require('./../controllers/users');


app.get('/',(req,res) => {
    res.render('index')
})

app.use('/users',userController);
 


module.exports = { app }