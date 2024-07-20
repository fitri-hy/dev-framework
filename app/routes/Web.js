const fs = require('fs');
const express = require('express');
const path = require('path');
const router = express.Router();
const { processFile } = require('../services/Service');

/**
 * Renders a page with the layout.
 * @param {string} pagePath - The path to the page to render.
 * @param {object} res - The response object.
 */
async function renderPage(pagePath, res) {
    const layoutPath = path.join(__dirname, '..', '..', 'templates', 'layout.dev');
    try {
        let layoutContent = await processFile(layoutPath);
        const pageContent = await processFile(pagePath);
        layoutContent = layoutContent.replace(/-> pages/, pageContent);
        res.send(layoutContent);
    } catch (error) {
        console.error('Error processing file:', error.message);
        console.error('Stack trace:', error.stack);
        res.status(500).send('Error processing file');
    }
}

router.get('/', (req, res) => {
    const homePagePath = path.join(__dirname, '..', '..', 'templates', 'pages', 'home.dev');
    renderPage(homePagePath, res);
});

router.get('/about', (req, res) => {
    const aboutPagePath = path.join(__dirname, '..', '..', 'templates', 'pages', 'about.dev');
    renderPage(aboutPagePath, res);
});

router.get('/*', (req, res) => {
    const aboutPagePath = path.join(__dirname, '..', '..', 'templates', 'pages', '404.dev');
    renderPage(aboutPagePath, res);
});

module.exports = router;
