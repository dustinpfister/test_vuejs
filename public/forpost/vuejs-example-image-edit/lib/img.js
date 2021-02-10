var IMG = (function(){

    // main method
    var api = function(opt){
        opt = opt || {};
        return {
               width: opt.width || 8,
               height: opt.height || 8,
               pxSize: 32,
               palette: opt.palette || [false, 'white', 'black', 'red', 'lime', 'blue'],
               colorIndex: 0,
               data: opt.data || [
                   0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,0,0,0,0,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,0,2,2,0,0,0,
                   0,0,0,0,0,0,0,0
               ]
           }
    };

    // create a PIXMAP format object with an array if IMGS
    api.createPixmap = function(opt){
        opt = opt || {};
        var ani = {};
        var data = [];
        var imgs = opt.imgs || [];
        imgs.forEach(function(img){
            data = data.concat(img.data);
        });
        ani[opt.aniName || 'animation'] = {
            paletteIndex: 0,
            w: opt.w || 32,
            h: opt.h || 32,
            data: data
        };
        return {
            name : opt.setName || 'none',
            palettes: [opt.palette || [false, 'black', 'white']],
            ani: ani
        };
    };

    // create IMGS from a pixmap object
    api.createIMGSFromPixmap = function(pixmap, animationKey, paletteIndex){
        animationKey = animationKey || Object.keys(pixmap.ani)[0]
        var imgs = [],
        ani = pixmap.ani[animationKey];
        console.log(ani);
        
        var size = ani.w * ani.h;
        var frames = ani.data.length / size;
        console.log('size', size, 'frames', frames);
        var frameIndex = 0;
        while(frameIndex < frames){
            var data = ani.data.slice(frameIndex * size, size);
            console.log(data);
            var img = api({
               width: pixmap.w,
               height: pixmap.h,
               palette: pixmap.palettes[paletteIndex || 0],
               data: data
            });
            imgs.push(img);
            frameIndex += 1;
        }

        return imgs;
    };

    return api;
}());
