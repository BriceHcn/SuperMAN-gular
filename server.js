//Install express server
var proxy = require('express-http-proxy');
const express = require('express');
const path = require('path');
const url = require('url');

// New hostname+path as specified by question:
const apiProxy = proxy('https://superheroapi.com/api/', {
    forwardPath: req => url.parse(req.baseUrl).path
});

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/superMangular'));

app.use('/api/*', apiProxy);

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/superMangular/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
