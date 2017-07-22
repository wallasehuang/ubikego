var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index');
// });
router.get('/', function(req, res, next) {
    var btn_text = "刷卡（取車）";
    var url = 'http://140.120.54.104:8001/hackntu/public/api/carddata';
    var r = res;
    request(url, function(err, res, body) {
        var data = JSON.parse(body);
        console.log('data', data);
        console.log('data.state', data[data.length - 1].state);
        var state = parseInt(data[data.length - 1].state);
        if (state === 1) {
            btn_text = "刷卡（還車）";
            state = 0;
            console.log('index.js 19', state);
        } else if (state === 0) {
            btn_text = "刷卡（取車）";
            state = 1;
            console.log('index.js 23', state);
        }
        console.log('index.js 25', state);
        r.render('index', {
            btn_text,
            state
        });
    });
});
module.exports = router;