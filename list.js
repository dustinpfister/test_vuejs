// just a way to serve the html folder
let express = require('express'),
app = express(),
fs = require('fs'),
port = process.env.PORT || process.argv[2] || 8080;

// host forpost and js folders as static
app.use('/forpost', express.static('public/forpost'));
app.use('/js', express.static('public/js'));

// generate list of examples for root
app.use('/', require('./middleware/index_forpost.js')({dir:'./public/forpost'}))
/*
app.get('/', function (req, res) {
    fs.readdir('./public/forpost', function (e, files) {
        if (e) {
            res.send(e.message);
        } else {
            let html = '<h1>VUE.JS EXAMPLES:</h1>';
            files.forEach((folder) => {
                html += '<a href=\"\/forpost\/' + folder + '\"><p>' + folder + '<\/p>'
            });
            res.send(html);
        }
    });
});
*/

// start server
app.listen(port, function () {
    console.log('list examples server up on port: ' + port);
});
