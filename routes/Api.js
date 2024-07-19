const express = require('express');
const router = express.Router();

const exampleData = {
    message: 'DEV Framework'
};

router.get('/data', async (req, res) => {
    try {
        res.json(exampleData);
    } catch (error) {
        console.error('Error handling /data route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
