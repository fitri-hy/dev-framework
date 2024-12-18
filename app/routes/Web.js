const express = require('express');
const path = require('path');
const router = express.Router();
const { DevPage, templates } = require('../utils/Route');
const PageController = require('../controllers/PageController');

router.get('/', PageController.Home);
router.get('/todo', PageController.ToDo);
router.get('/*', PageController.NotFound);

module.exports = router;
