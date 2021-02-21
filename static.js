// just a way to serve the html folder
let express = require('express'),
app = express(),
port = process.env.PORT || process.argv[2] || 8080;
 
app.use('/', express.static('public'));

app.listen(port, function () {
    console.log('static server up on port: ' + port);
});