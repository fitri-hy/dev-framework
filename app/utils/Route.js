const path = require('path');
const { processFile } = require('../services/Service');
const templates = path.join(__dirname, '..', '..', 'templates');

async function DevPage(pagePath, res) {
    const layoutPath = path.join(templates, 'layout.dev');
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

module.exports = { DevPage, templates };
