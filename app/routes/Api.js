const express = require('express');
const router = express.Router();

router.get('/data', async (req, res) => {
    try {
        res.json({ "message": "DEV Framework" });
    } catch (error) {
        console.error('Error handling /data route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
