var express = require('express');
var router = express.Router();
const email = require('../libs/sendEmail.js')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/send', function (req, res, next) {
    let html = `<p>Hi, ${req.query.firstName}  ${req.query.lastName},  welcome registration success</p>`
    console.log(req.query);
    email.sendMail(req.query.email, html, (state)=>{
        console.log(true);
        res.send('send email success')
    })
});

module.exports = router;
