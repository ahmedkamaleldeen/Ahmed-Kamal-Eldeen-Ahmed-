const mongoose = require('mongoose');

const todoModel = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Users'

    },
    title: {
        type: String,
        minLength: 5,
        maxLength: 20,
        required: true,
    },
    status: {
        type: String,
        default: "to-do",
        enum: ['to-do', 'in progress', 'done']
    },
    tags: {
        type: String,
        maxLength: 10
    },
    createdAt: {
        type: Date,
        timeStamp: true
    },
    updatedAt: {
        type: Date,
        timeStamp: true
    }
})

const TodoModel = mongoose.model('Todo', todoModel);
module.exports = TodoModel;
