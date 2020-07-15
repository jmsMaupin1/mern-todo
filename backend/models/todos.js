const mongoose = require('mongoose');
let {Schema, model} = mongoose;

const TodoSchema = new Schema({
    name: String,
    completed: Boolean
})

module.exports = model('Todo', TodoSchema);