var express = require('express');
var router = express.Router();

/* GET download listing. */
router.get('/', function (req, res, next) {
    res.render('download', {greeting: 'Haha'});
});

// Dowload a image
router.get('/img', function (req, res, next) {
    res.download('public/images/bg.jpg');
});

// Dowload a image
router.get('/tpl', function (req, res, next) {
    res.download('tpl/layout.jade');
});

module.exports = router;
