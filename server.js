const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

var port = process.env.PORT || 1337;

app.get('/config', function (req, res) {
    if (process.env.AppEnvironment) {
        res.sendFile(path.join(__dirname, 'dist/assets/config.' + process.env.AppEnvironment + '.json'));
    } else {
        res.send('{}');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});