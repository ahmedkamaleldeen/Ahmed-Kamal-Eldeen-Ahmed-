const { json } = require('express');
var cors = require('cors')
const express = require('express');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ITP_Assuit');

const todosRoutes = require('./routes/todos')
const usersRoutes = require('./routes/users')
const app = express();
app.use(express.static("./static"))
app.use(express.json())
app.use(cors());

require('./models/users')
app.use('/todos', todosRoutes)
app.use('/users', usersRoutes)

app.listen(3000, () => {
    console.log('App is up and running on: localhost:3000');
})