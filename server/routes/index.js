const express = require('express');
const router = express.Router();  
module.exports = router; // Ensure the router is exported
    const { reviewCode } = require('../controllers/codeReviewController');

    router.post('/review', reviewCode);

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});