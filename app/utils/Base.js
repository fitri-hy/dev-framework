const fs = require('fs');
const path = require('path');

/**
 * Processes @include directives by including the content of the specified files.
 * @param {string} content - The content to process.
 * @param {string} filePath - The path to the current file (for resolving include paths).
 * @param {function} processFile - The function to process files.
 * @returns {Promise<string>} The content with @include directives replaced.
 */
async function processIncludes(content, filePath, processFile) {
    const includeMatches = content.match(/@include\s+'([^']+)'/g);
    if (includeMatches) {
        for (const match of includeMatches) {
            const includePath = match.match(/@include\s+'([^']+)'/)[1];
            const includeFilePath = path.join(path.dirname(filePath), includePath);
            const includeContent = await processFile(includeFilePath);
            content = content.replace(match, includeContent);
        }
    }
    return content;
}

/**
 * Replaces placeholders in the content with static HTML elements.
 * @param {string} content - The content to process.
 * @returns {string} The content with placeholders replaced.
 */
function replacePlaceholders(content) {
    return content.replace(/@pages>/, '<main>')
                  .replace(/@pages\/>/, '</main>')
                  .replace(/@layout>/, '<!DOCTYPE html><html><head>')
                  .replace(/@layout\/>/, '</html>')
                  .replace(/@head>/, '<head>')
                  .replace(/@head\/>/, '</head>')
                  .replace(/@body/, '<body>')
                  .replace(/@body\/>/, '</body>')
                  .replace(/@components>/, '<div>')
                  .replace(/@components\/>/, '</div>')
                  .replace(/@script>/, '')
                  .replace(/@script\/>/, '');
}

module.exports = {
    processIncludes,
    replacePlaceholders
};
