var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'wow this sucks',
    content: 'aeotioaejtaeiojtoaeij',
    numbers: [1, 2, 3, 4, 5],
    hello: 'hello',
    isVisible: true,
   });
});

module.exports = router;
