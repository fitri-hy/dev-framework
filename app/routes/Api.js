const express = require('express');
const router = express.Router();

let todos = [];

router.get('/todos', (req, res) => {
    res.status(200).json(todos);
});

router.post('/todos/created', (req, res) => {
    const { task } = req.body;
    if (!task || task.trim() === '') {
        return res.status(400).json({ message: 'Task is required' });
    }
    const newTodo = {
        id: todos.length + 1,
        task,
        completed: false,
    };
    todos.push(newTodo);
    res.redirect('/todo');
});

router.post('/todos/edit/:id', (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    todos[todoIndex].task = task;
    res.redirect('/todo');
});

router.post('/todos/delete/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todos.splice(todoIndex, 1);
    res.redirect('/todo');
});

module.exports = router;
