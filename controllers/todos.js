const fs = require('fs')

const Todo = require('../models/todos')

const findone = (id) => {
     return Todo.findById(id)
}

const create = (title) => {
    const todo = { title }
    return Todo.create(todo);
}



module.exports = {
    findone,
    create
}