const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, eexpress!')
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);
