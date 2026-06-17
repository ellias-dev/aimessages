const express = require('express');
const router = express.Router();

const { generateHokku } = require('../services/openaiService');
const responseRender = require('../utils/responseRender');

router.post('/usersend', async (req, res) => {
    const { yourName, meal, season } = req.body;

    try {
        const rhyme = await generateHokku(yourName, meal, season);
        const formatted = rhyme.replace(/\n/g, "<br>");
        res.send(responseRender(formatted));
    } catch (err) {
        res.status(500).send("Error generating poem");
    }
});

module.exports = router;