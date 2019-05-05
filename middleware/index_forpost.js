let express = require('express');
fs = require('fs');

// export a factor function that will return a router
module.exports = (opt) => {

    // options
    opt = opt || {};
    opt.dir = opt.dir || 'public/forpost';

    // Router
    let router = express.Router();
    router.get('*', (req, res, next) => {

        fs.readdir(opt.dir, (e, files) => {
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

    return router;

};
