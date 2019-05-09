let express = require('express');
path = require('path'),
fs = require('fs');

// export a factor function that will return a router
module.exports = (opt) => {

    // options
    opt = opt || {};
    opt.dir = path.resolve(opt.dir || 'public/forpost');
    opt.folderName = 'forpost';

    // Router
    let router = express.Router();
    router.get('*', [

            // get files list
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

            // gen html
            (req, res, next) => {
                let html = '<body><h1>VUE.JS EXAMPLES:</h1>',
                len = req.files.length,
                i = 0,
                step = () => {
                    i += 1;
                    if (i === len) {
                        html += '<\/body>';
                        res.send(html);
                    }
                };
                req.files.forEach((fn) => {
                    fs.stat(path.join(opt.dir, fn), (e, stats) => {
                        if (stats.isDirectory()) {
                            fs.readdir(path.join(opt.dir, fn), (e, files) => {
                                //html += '<ul><li>' + fn + ' <ul>';
                                html += '<h2>' + fn + ' examples: <\/h2>';
                                files.forEach((pfn) => {
                                    html += '<li><a href="/' + opt.folderName + '/' + fn + '/' + pfn + '">' + pfn + '<\/a><\/li>';
                                    //html += '<p>' + path.basename(pfn,path.extname(pfn)).replace(/-|_/g,' ') + '<\/p> ';
                                    //html += '<li><\/li> ';
                                });
                                //html += '</ul><\/li><\/ul>';
                                step();
                            });
                        } else {
                            html += '<p>' + fn + '<\/p ';
                            step();
                        }
                    });
                });
            }

        ]);

    return router;

};
