const responseRender = (arg) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
    <title>Arigato!</title>
</head>
<body>
    <h1>Arigato! Your hokku is ready</h1>
    <div class="rhyme">
    <p class="response">${arg}</p>
    <p class="cite"> &copy; Mr. GPT, a poet and philanthrope</p>
    <a href="/" class="button btn">Make another one</a>
    </div>
    
    
</body>
</html>`;
};

module.exports = responseRender;