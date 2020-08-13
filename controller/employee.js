var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    if (req.cookies['logAdmin'] != null) {
        var data = {
            username: req.cookies['logAdmin']
        }
        res.render('admin', data);
    } else {
        res.redirect('/login');
    }
});

router.post('/', (req, res) => {

    res.render('posted');
});


module.exports = router;