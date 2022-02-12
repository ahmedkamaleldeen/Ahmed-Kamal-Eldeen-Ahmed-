const mongoose = require('mongoose');

const usersModel = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 8,
    },
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15,
    },
    dob: {
        type: Date,
        require: true
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

const UsersModel = mongoose.model('Users', usersModel);
module.exports = UsersModel;
