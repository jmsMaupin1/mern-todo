const app = require('express').Router();
const Todos = require('../models/todos');

// List all Todos
app.get('/', (req, res) => {
    Todos.find()
        .then(doc => {res.json(doc)})
        .catch(err => {res.json({err})})
})

// Create a Todo
app.post('/', (req, res) => {
    let {name, completed} = req.body;
    let todo = new Todos({name, completed})
    todo.save()
        .then(doc => {res.json(doc)})
        .catch(err => {res.json({err})})
})

// Delete a Todo
app.delete('/:id', (req, res) => {
    let _id = req.params.id;
    
    Todos.findOneAndDelete({_id})
        .then(doc => res.json(doc))
        .catch(err => res.json({err}))
})

// Update a Todo
app.put('/:id', (req, res) => {
    let _id = req.params.id;
    let {name, completed} = req.body;

    Todos.findOneAndUpdate({_id}, {name, completed}, {new: true})
        .then(doc => res.json(doc))
        .catch(err => res.json({err}))
})

module.exports = app;