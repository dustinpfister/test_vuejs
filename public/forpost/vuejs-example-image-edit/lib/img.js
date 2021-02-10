var IMG = (function(){

    // main method
    var api = function(){
        return {
               width: 8,
               height: 8,
               pxSize: 32,
               palette: [false, 'white', 'black', 'red', 'lime', 'blue'],
               colorIndex: 0,
               data: Vue.observable([
                   0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,0,0,0,0,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,0,2,2,0,0,0,
                   0,0,0,0,0,0,0,0
               ])
           }
    };

    // create a PIXMAP format object 
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
            w: opt.width || 32,
            h: opt.height || 32,
            data: data
        };
        return {
            name : opt.setName || 'none',
            palettes: [opt.palette || [false, 'black', 'white']],
            ani: ani
        };
    };

    return api;
}());
