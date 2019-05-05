let express = require('express');
path = require('path'),
fs = require('fs');

// export a factor function that will return a router
module.exports = (opt) => {

    // options
    opt = opt || {};
    opt.dir = path.resolve(opt.dir || 'public/forpost');

    // Router
    let router = express.Router();
    router.get('*', [

            (req, res, next) => {
                fs.readdir(opt.dir, (e, files) => {
                    if (e) {
                        res.send(e.message);
                    } else {
                        req.files = files;
                        next();
                    }
                });
            },

            (req, res, next) => {

                let html = '<h1>VUE.JS EXAMPLES:</h1>';
                req.files.forEach((folder) => {
                    html += '<a href=\"\/forpost\/' + folder + '\"><p>' + folder + '<\/p>'
                });
                res.send(html);

            }

        ]);

    return router;

};
