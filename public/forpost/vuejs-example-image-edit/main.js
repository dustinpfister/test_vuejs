new Vue({
    el: '#app',
    template: '<div>'+
        '<image-color-pick v-bind:img="imgs[currentImage]" v-on:color-click="colorClickHandler"></image-color-pick>'+
        '<image-div-grid v-bind:img="imgs[currentImage]" v-on:px-click="pxClickHandler"></image-div-grid>'+
    '</div>',
    data: function(){
        return {
           currentImage: 0,
           imgs : [{
               width: 8,
               height: 8,
               pxSize: 32,
               palette: [false, 'white', 'black', 'red', 'lime', 'blue'],
               data: [
                   5,0,0,0,0,0,0,5,
                   0,0,0,0,0,0,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,0,0,0,0,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,0,2,2,0,0,0,
                   5,0,0,0,0,0,0,5
               ]
           }]
        }
    },
    methods: {
        pxClickHandler: function(x, y){
            console.log(x, y);
        },
        colorClickHandler: function(index){
            console.log(index);
        }
    }
});
