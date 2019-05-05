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

                let html = '<h1>VUE.JS EXAMPLES:</h1>',
                len = req.files.length,
                i = 0,
                step = () => {
                    i += 1;
                    if (i === len) {
                        res.send(html);
                    }
                };

                req.files.forEach((fn) => {

                    fs.stat(path.join(opt.dir, fn), (e, stats) => {

                        //html += '<a href=\"\/forpost\/' + folder + '\"><p>' + folder + '<\/p>';

                        if (stats.isDirectory()) {

                            fs.readdir(path.join(opt.dir, fn), (e, files) => {

                                html += '<ul><li>' + fn + ':<ul>';

                                files.forEach((pfn) => {

                                    html += '<li><a href="/' + opt.folderName + '/' + fn + '/' + pfn + '">' + pfn + '<\/a><\/li>'

                                });

                                html += '</ul></li></ul>'

                                step();

                            });

                        } else {

                            html += '<p>' + fn + '<\/p>';
                            step();

                        }

                    });
                });

            }

        ]);

    return router;

};
