// just a way to serve the html folder
let express = require('express'),
app = express(),
fs = require('fs'),
port = process.env.PORT || process.argv[2] || 8080;

// host forpost and js folders as static
app.use('/forpost', express.static('public/forpost'));
app.use('/draftpost', express.static('public/draftpost'));
app.use('/js', express.static('public/js'));

// simple data demo path for examples
app.use('/data', require('./middleware/get_data.js')());

// draft path
app.use('/draft', require('./middleware/index_forpost.js')({dir:'./public/draftpost', folderName: 'draftpost'}));

// generate list of examples for root
app.use('/', require('./middleware/index_forpost.js')({dir:'./public/forpost'}));

// start server
app.listen(port, function () {
    console.log('list examples server up on port: ' + port);
});
