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

exports.About = async (req, res) => {
    try {
        const pagePath = path.join(templates, 'pages/about.dev');
        await DevPage(pagePath, res);
    } catch (err) {
        res.status(500).send('Error rendering about page');
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
