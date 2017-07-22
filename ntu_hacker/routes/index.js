var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index');
// });
router.get('/', function(req, res, next) {
    var btn_text = "刷卡（取車）";
    var url = 'http://140.120.54.104:8001/hackntu/public/api/carddata/1';
    request(url, function(err, res, body) {
        console.log(res.body.state);
        console.log(body.state);
        if (body.state) {
            btn_text = "刷卡（還車）";
        } else {
            btn_text = "刷卡（取車）";
        }
    });
    res.render('index', {
        btn_text
    });
});
module.exports = router;