const fs = require('fs');
const path = require('path');
const { ToDoList } = require('../controllers/api/ApiController');
const { process, holders } = require('../utils/Base');

async function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        content = await process(content, filePath, processFile);
        content = holders(content);

        content = await ToDoList(content);

        return content;
    } catch (error) {
        console.error('Error processing file:', error.message);
        console.error('Stack trace:', error.stack);
        throw error;
    }
}

module.exports = {
    processFile
};
