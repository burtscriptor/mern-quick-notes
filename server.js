const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();

require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));


app.use('/api/users', require('./routes/api/users'));
app.use('/api/notes', require('./routes/api/notes'));



app.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, 'dist', 'index.html'))
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log(`Express running on http://localhost:${port}`)
});
