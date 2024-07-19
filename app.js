const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/Api');
const webRoutes = require('./routes/Web');

const app = express();
const port = 3000;

app.use('/api', apiRoutes);
app.use('/', webRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
