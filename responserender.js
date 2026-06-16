const responseRender = (arg) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
    <title>Welcome to a poetry cave</title>
</head>
<body>
    <h1>Here is your very own hokku</h1>
    <p>${arg}</p>
    
</body>
</html>`;
};

module.exports = responseRender;