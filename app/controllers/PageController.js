const path = require('path');
const { DevPage, templates } = require('../utils/Route');

exports.Home = async (req, res) => {
    try {
        const pagePath = path.join(templates, 'pages/home.dev');
        await DevPage(pagePath, res);
    } catch (err) {
        res.status(500).send('Error rendering home page');
    }
};

exports.ToDo = async (req, res) => {
    try {
        const pagePath = path.join(templates, 'pages/todo.dev');
        await DevPage(pagePath, res);
    } catch (err) {
        res.status(500).send('Error rendering todo page');
    }
};

exports.NotFound = async (req, res) => {
    try {
        const pagePath = path.join(templates, 'pages/404.dev');
        await DevPage(pagePath, res);
    } catch (err) {
        res.status(500).send('Error rendering 404 page');
    }
};
