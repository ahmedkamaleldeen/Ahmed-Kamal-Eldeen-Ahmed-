const fs = require('fs')
const express = require("express");
const todosController = require('../controllers/todos')
const router = express.Router();





router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    todosController.findone(id)
        .then((todo) => {
            if(!todo){
                res.status(404).end();
                return;
            }
            res.json(todo)
        })
        .catch(e=>{
            res.status(500).json(e)
        })
})

router.post('/', (req, res, next) => {
    const { title } = req.body;
    todosController.create(title)
        .then((todo) => {
            res.json(todo);
        })
        .catch(e => res.status(422).json(e))
})

router.patch('/:id', (req, res, next) => {
    const { id } = req.params;
    const data = JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf-8' }));
    const todo = data.find(todo => +todo.id === +id);
    if (!todo) {
        console.log("Element not found")
        res.json({ "Element not found": 0 });
    }
    else {
        const { title } = req.body;
        todo.title = title;
        fs.writeFileSync('./data.json', JSON.stringify(data));
        res.json(todo);
    }
})

router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    const data = JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf-8' }));
    const deletId = data.filter(((i) => +i.id !== +id))
    if (data.length > deletId.length) {
        fs.writeFileSync('./data.json', JSON.stringify(deletId));

    }
    else {
        console.log("Element not found")
        res.json({ "Element not found": 0 });
    }

})

router.get('/', (req, res, next) => {
    const data = JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf-8' }));
    res.json(data)


})

module.exports = router;