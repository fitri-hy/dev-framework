const fs = require('fs');
const path = require('path');

async function process(content, filePath, processFile) {
    const Matches = content.match(/@include\s+'([^']+)'/g);
    if (Matches) {
        for (const match of Matches) {
            const Paths = match.match(/@include\s+'([^']+)'/)[1];
            const FilePath = path.join(path.dirname(filePath), Paths);
            const Contents = await processFile(FilePath);
            content = content.replace(match, Contents);
        }
    }
    return content;
}

function holders(content) {
    return content.replace(/@layout>/, '<!DOCTYPE html><html>')
                  .replace(/@head>/, '<head>')
                  .replace(/@head\/>/, '</head>')
                  .replace(/@body>/, '<body>')
				  .replace(/@pages>/, '')
                  .replace(/@components>/, '')
                  .replace(/@components\/>/, '')
                  .replace(/@pages\/>/, '')
                  .replace(/@script>/, '')
                  .replace(/@script\/>/, '')
                  .replace(/@body\/>/, '</body>')
                  .replace(/@layout\/>/, '</html>');
}

module.exports = {
    process,
    holders
};
