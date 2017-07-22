var express = require('express');
var router = express.Router();
let status = 0;
let discount = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('this is api');
});
router.post('/card_in_out', function(req, res, next) {
    var id = req.body.id;
    // type => 0:刷出 1:刷進
    var type = req.body.type;
    if (type === 0) {
        status = 0;
        discount = 0;
    } else {
        status = 1;
        discount = 100;
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        status: status,
        discount: discount
    });
});
router.get('/mession_status', function(req, res, next) {
    res.status(200).json({
        status: status,
        discount: discount
    });
});
module.exports = router;