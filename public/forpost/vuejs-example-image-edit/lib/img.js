var IMG = (function(){
    var api = function(){
        return {
               width: 8,
               height: 8,
               pxSize: 32,
               palette: [false, 'white', 'black', 'red', 'lime', 'blue'],
               colorIndex: 0,
               data: [
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
   return api;
}());
