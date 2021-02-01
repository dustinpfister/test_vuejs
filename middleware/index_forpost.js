let express = require('express');
path = require('path'),
fs = require('fs');

// export a factor function that will return a router
module.exports = (opt) => {

    // options
    opt = opt || {};
    opt.dir = path.resolve(opt.dir || 'public/forpost');
    opt.folderName = opt.folderName || 'forpost';

return (function(dir, folderName){

    // options
    //opt = opt || {};
    //opt.dir = path.resolve(opt.dir || 'public/forpost');
    //opt.folderName = opt.folderName || 'forpost';

    // Router
    let router = express.Router();
    router.get('*', [

            // get files list
            (req, res, next) => {
                fs.readdir(dir, (e, files) => {
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
                let projects = [],
                len = req.files.length,
                i = 0,
                step = (projects) => {
                    i += 1;
                    if (i === len) {
                        let html = '<html><head><title>VUEJS Examples</title></head><body><h1>VUE.JS EXAMPLES:<\/h1>';

                        projects.sort((a, b) => {
                            if (a.fn > b.fn) {
                                return 1
                            }
                            if (a.fn < b.fn) {
                                return -1
                            }
                            return 0;
                        });

                        projects.forEach((project_item) => {
                            html += '<ul style="display:inline-block;"><li>' + project_item.fn + '- <ul>';
                            project_item.files.forEach((file) => {
                                html += '<li><a href=\"/' + file.href + '\">' + file.pfn + '<\/a><\/li>';
                            });
                            html += '<\/ul><\/li><\/ul>';
                        });

                        res.send(html + '<\/body></html>');

                    }

                };

                req.files.forEach((fn) => {

                    fs.stat(path.join(dir, fn), (e, stats) => {

                        if (stats.isDirectory()) {

                            fs.readdir(path.join(dir, fn), (e, files) => {

                                let project_item = {
                                    fn: fn,
                                    files: []
                                }

                                files.forEach((pfn) => {

                                    if (path.extname(pfn) === '.html') {

                                        project_item.files.push({
                                            href: folderName + '/' + fn + '/' + pfn,
                                            pfn: pfn
                                        });

                                    }

                                });

                                projects.push(project_item);

                                step(projects);
                            });

                        } else {

                            step();

                        }
                    });
                });
            }

        ]);

    return router;

}(opt.dir, opt.folderName));

};
