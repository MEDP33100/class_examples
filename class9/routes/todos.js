var express = require('express');
var router = express.Router();
var fs = require('fs');

// GET /todos/ -- gets all the todo items
router.get('/', function (req, res, next) {
    fs.readFile('./data/todos.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.send('Sorry not found');
        }

        res.end(data);
    })
});

// GET /todos/:id -- gets the todo item by id
router.get('/:id', function (req, res, next) {
    console.log('request to get todo item by ID');
    const item = todosList.find(todoItem => {
        return todoItem.id === parseInt(req.params.id)
    });
    console.log(item);
    res.end(JSON.stringify(item));
})


// POST /todos -- add an item to the todo list
router.post('/', function (req, res, next) {
    console.log(req.body);
    fs.readFile('./data/todos.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.send('Sorry not found');
        }

        const todoList = JSON.parse(data);
        todoList.push({
            id: todoList.length + 1,
            title: req.body.title,
            completed: req.body.completed,
        });
        fs.writeFile('./data/todos.json', JSON.stringify(todoList), function (error, data) {
            res.send('Created item.');
        });
    })
});

// PUT /todos/1 -- update an item to mark as completed/not completed
router.put('/:id', function (req, res, next) {
    console.log(req.params.id);

    fs.readFile('./data/todos.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.send('Sorry not found');
        }

        const todoList = JSON.parse(data);
        const item = todoList.find(todoItem => {
            return todoItem.id === parseInt(req.params.id)
        });
        if (!item) {
            res.statusCode = 404;
            res.send('No matching item with that id');
            return;
        }

        item.completed = req.body.completed;

        console.log(item);

        fs.writeFile('./data/todos.json', JSON.stringify(todoList), function (error, data) {
            res.send('Updated item.')
        });
    });
});

// DELETE /todo/:id
router.delete('/:id', function (req, res) {
    console.log(req.params.id);
    fs.readFile('./data/todos.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.send('Sorry not found');
        }

        const todoList = JSON.parse(data);
        const itemIndex = todoList.findIndex(todoItem => {
            return todoItem.id === parseInt(req.params.id)
        });
        const itemRemoved = todoList.splice(itemIndex, 1);


        fs.writeFile('./data/todos.json', JSON.stringify(todoList), function (error, data) {
            res.send('Deleted item.')
        });
    });
})

module.exports = router;