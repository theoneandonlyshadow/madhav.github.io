const express = require('express');
const path = require('path');

let init_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(init_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(init_path, "index.html"));
})

app.listen("8080", () => {
    console.log('portfolio is connected to port :: 8080');
})