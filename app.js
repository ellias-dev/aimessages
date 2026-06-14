const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.post('/usersend', (req, res) => {
    const name = req.body.yourName, meal = req.body.meal, season = req.body.season;
    res.send(`The answer is ${name}, ${meal}, and ${season}`);

})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});