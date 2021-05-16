const { router } = require('./../../system/system');
const {usrModel} = require('../models/user');


router.get('/',(req, res) => {
    res.send("Users Controller (/) method")
})

router.get('/all', (req, res) => {
    usrModel.get((err,response) => {
        if(err == null) res.send(response);
        else res.send(err);
    })
})

router.get("/user/:id", (req, res) => {
    usrModel.get((err,response) => {
        if(err == null) res.send(response);
        else res.send(err);
    },req.params.id)
})


module.exports = router;