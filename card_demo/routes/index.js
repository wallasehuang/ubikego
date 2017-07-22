var express = require('express');
var router = express.Router();
var request = require('request');
var state = 0;
/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index');
// });
router.get('/', function(req, res, next) {
    var btn_text = "刷卡（取車）";
    var url = 'http://140.120.54.104:8001/hackntu/public/api/carddata';
    request(url + '/1', function(err, res, body) {
        var data = JSON.parse(body);
        console.log(data.state);
        if (data.state) {
            btn_text = "刷卡（還車）";
            state = data.state;
        } else {
            btn_text = "刷卡（取車）";
            state = data.state;
        }
    });
    res.render('index', {
        btn_text,
        state
    });
});
module.exports = router;