var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile('./data/todos.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      res.statusCode = 404;
      res.send('Sorry not found');
    }

    console.log(data);
    const todoList = JSON.parse(data);
    res.render('index', {
      todos: todoList,
    });
  })

});

module.exports = router;
