const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = 3000;

const responseRender = require('./responserender');
let snippet;
//OpenAI Snippet
const OpenAI = require('openai');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
async function run(answer1, answer2, answer3) {
    const response = await client.responses.create({
        model: "gpt-5.5",
        input: `Write a short hokku in English about ${answer1} eating or cooking ${answer2} during ${answer3}.`,
    });

    console.log(response.output_text);
    return response.output_text;


}

//run();
// -----------------

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.post('/usersend', async (req, res) => {
    const name = req.body.yourName, meal = req.body.meal, season = req.body.season;

    const rhyme = await run(name, meal, season);
    const formattedRhyme = rhyme.replace(/\n/g, "<br>");
    res.send(responseRender(formattedRhyme));
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});