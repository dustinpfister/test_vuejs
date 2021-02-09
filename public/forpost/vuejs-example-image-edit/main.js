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
               colorIndex: 0,
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
    updated: function(){
        console.log('update');
    },
    methods: {
        // set the current image pix pos to the current image color index
        pSet: function(x, y){
            var dat = this.$data;
            var img = dat.imgs[dat.currentImage];
            var pxIndex = y * img.width + Number(x);
            img.data[pxIndex] = 0; //img.colorIndex;
            this.$forceUpdate();
        },
        pxClickHandler: function(x, y){
            this.pSet(x, y);
        },
        colorClickHandler: function(index){
            console.log(index);
        }
    }
});
