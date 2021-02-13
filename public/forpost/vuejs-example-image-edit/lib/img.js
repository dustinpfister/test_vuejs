var IMG = (function(){

   // create blank data helper
   var createBlankData = function(size, index){
       return new Array(size).fill(index);
   };

   // create img method
   var createIMG = function(opt){
        opt = opt || {};
        var img = {
               width: opt.width || 8,
               height: opt.height || 8,
               pxSize: 32,
               palette: opt.palette || [false, 'white', 'black', 'red', 'lime', 'blue'],
               colorIndex: 0
           };
        img.data = opt.data || createBlankData(img.width * img.height, 0);
        return img;
    };

    // main method
    var api = createIMG;

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
        var size = ani.w * ani.h;
        var frames = ani.data.length / size;
        var frameIndex = 0;
        console.log(ani.w, ani.h)
        while(frameIndex < frames){
            var data = ani.data.slice(frameIndex * size, frameIndex * size + size);
            var img = api({
               width: ani.w, //pixmap.w,
               height: ani.h, //pixmap.h,
               palette: pixmap.palettes[paletteIndex || 0],
               data: data
            });
            console.log(img);
            imgs.push(img);
            frameIndex += 1;
        }
        return imgs;
    };

    return api;
}());
