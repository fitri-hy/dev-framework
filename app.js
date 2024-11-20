const express = require('express');
const path = require('path');
const logger = require('./app/Dev');
const apiRoute = require('./app/routes/Api');
const webRoute = require('./app/routes/Web');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

app.use('/api', apiRoute);
app.use('/', webRoute);
app.use('/*', webRoute);

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
