const express = require('express');
const path = require('path');
const apiRoute = require('./app/routes/Api');
const webRoute = require('./app/routes/Web');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoute);
app.use('/', webRoute);
app.use('/*', webRoute);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
