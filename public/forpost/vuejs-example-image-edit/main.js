new Vue({
    el: '#app',
    template: '<div class="wrap_main">'+
        '<div>'+
            '<image-color-pick v-bind:img="imgs[currentImage]" v-on:color-click="colorClickHandler"></image-color-pick>'+
            '<image-div-grid v-bind:img="imgs[currentImage]" v-on:px-click="pxClickHandler"></image-div-grid>'+
        '</div>' +
        '<image-text-pixmap v-bind:img="imgs[currentImage]"></image-text-pixmap>'+
    '</div>',
    data: function(){
        return {
           currentImage: 0,
           imgs : [IMG()]
        }
    },
    methods: {
        // set the current image pix pos to the current image color index
        pSet: function(x, y){
            var dat = this.$data;
            var img = dat.imgs[dat.currentImage];
            var pxIndex = y * img.width + Number(x);
            img.data[pxIndex] = img.colorIndex;
        },
        pxClickHandler: function(x, y){
            this.pSet(x, y);
        },
        colorClickHandler: function(index){
            var dat = this.$data;
            var img = dat.imgs[dat.currentImage];
            img.colorIndex = index;
        }
    }
});

var pxObj = JSON.stringify(IMG.createPixmap({
   imgs: [IMG(), IMG()]
}));

console.log(pxObj);
