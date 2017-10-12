const express = require('express');
const render = require('../tpl/render');

const router = express.Router();

/* GET commadn listing. */
router.get('/', function (req, res, next) {
    const exec = require('child_process').exec;
    const cmdStr = 'node public/javascripts/command';

    exec(cmdStr, function (err, stdout, stderr) {
        if (err) {
            console.log('get weather api error:' + stderr);
        } else {
            var data = JSON.parse(stdout);

            console.log(data);
        }
    });
});

/* GET exec listing. */
router.get('/exec', function (req, res, next) {
    const exec = require('child_process').exec;
    const cmdStr = 'node tpl/javascripts/command';

    exec(cmdStr, function (err, stdout, stderr) {
        if (err) {
            console.log('get weather api error:' + stderr);
        } else {
            console.log(stdout);
        }
    });
});

/* GET build listing. */
router.get('/build', function (req, res, next) {
    const options = {
        GameName: '斗地主',

        DownloadLink: 'http://liaoning.uc8848.com/download/liaoning_183995936/gamehallsetup183995936.exe',
        DownloadBtnStyle: {
            top: 315,
            left: 336,
            width: 310,
            height: 89
        },

        MoreTitle: '推荐游戏下载',
        GameList: [
            '四冲(六冲)',
            '沈阳414',
            '马队',
            '同城游'
        ],

        CompanyName: '北京藏承韩卓网络科技有限公司',
        CompanyInfo: '北京市丰台区花乡纪家庙村188号A3135 010-84466306'
    };

    const html = render.renderFile('tpl/layout.jade', options);

    res.send(html);
});

module.exports = router;
