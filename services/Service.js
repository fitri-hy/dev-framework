const fs = require('fs');
const path = require('path');
const { fetchData, getData } = require('../controllers/ApiController');
const { processIncludes, replacePlaceholders } = require('../utils/Base');

/**
 * Processes a file by replacing placeholders and handling includes.
 * @param {string} filePath - The path to the file to process.
 * @returns {Promise<string>} The processed content of the file.
 */
async function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        content = await processIncludes(content, filePath, processFile);
        content = replacePlaceholders(content);

        const data = await fetchData();
        content = getData(content, data);

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
