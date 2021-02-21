// just a way to serve the html folder
let express = require('express'),
path = require('path'),
app = express(),
PORT = process.env.PORT || process.argv[2] || 8080,
PUBLIC_HTML = path.resolve(__dirname, 'public');

// use express static to serve the public folder
app.use('/', express.static(PUBLIC_HTML));

// listen on PORT
app.listen(PORT, function () {
    console.log('static server up');
    console.log('serving PUBLIC HTML folder at: ' + PUBLIC_HTML);
    console.log('on port: ' + PORT);
});