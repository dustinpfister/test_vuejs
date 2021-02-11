var vm = new Vue({
    el: '#app',
    template: '<div class="wrap_main">'+
        '<div class="warp_group">'+
            '<image-color-pick v-bind:img="imgs[currentImage]" v-on:color-click="colorClickHandler"></image-color-pick>'+
            '<image-div-grid v-bind:img="imgs[currentImage]" v-on:px-click="pxClickHandler"></image-div-grid>'+
            '<image-manager v-bind:state="$data" v-on:manager="managerClickHandler" ></image-manager>'+
        '</div>' +
        '<div style="text-align:center;">'+
            '<image-text-pixmap v-bind:imgs="imgs" v-on:load-json="load"></image-text-pixmap>'+
        '</div>' +
    '</div>',
    data: function(){
        var data = {
           currentImage: 0,
           imgs : [
               IMG({
                   palette:[false,"white","black","red","orange","blue"],
                   data:[
                       0,3,3,3,3,3,3,0,
                       3,3,3,4,4,3,3,3,
                       3,1,1,4,4,1,1,3,
                       3,1,5,4,4,5,1,3,
                       0,4,4,4,4,4,4,0,
                       0,4,2,4,4,2,4,0,
                       0,4,4,2,2,4,4,0,
                       0,4,4,4,4,4,4,0]
               }),
               IMG({
                   palette:[false,"white","black","red","orange","blue"],
                   data:[
                       0,3,3,3,3,3,3,0,
                       3,3,3,4,4,3,3,3,
                       3,1,1,4,4,1,1,3,
                       3,5,1,4,4,1,5,3,
                       0,4,4,4,4,4,4,0,
                       0,4,4,2,2,4,4,0,
                       0,4,4,2,2,4,4,0,
                       0,4,4,4,4,4,4,0]
               })
           ]
           //imgs : []
        };
        return data;
    },
    mounted: function(){
    },
    methods: {
        // set the current image pix pos to the current image color index
        pSet: function(x, y){
            var dat = this.$data;
            var img = dat.imgs[dat.currentImage];
            var pxIndex = y * img.width + Number(x);
            img.data[pxIndex] = Number(img.colorIndex);
            // force update all children
            this.$children.forEach(function(child){
                if(child.updateText){
                    child.updateText();
                }
            });
        },
        pxClickHandler: function(x, y){
            this.pSet(x, y);
        },
        colorClickHandler: function(index){
            var dat = this.$data;
            var img = dat.imgs[dat.currentImage];
            img.colorIndex = index;
        },
        managerClickHandler: function(action){
            var dat = this.$data;
            if(action == 'next'){
                dat.currentImage += 1;
                dat.currentImage = dat.currentImage >= dat.imgs.length ? 0 : dat.currentImage;
            }
            if(action == 'prev'){
                console.log('yes');
                dat.currentImage -= 1;
                dat.currentImage = dat.currentImage < 0 ? dat.imgs.length - 1 : dat.currentImage;
            }
        },
        load: function(json){
            var pixmapObj = JSON.parse(json);
            var imgs = IMG.createIMGSFromPixmap(pixmapObj);
            //console.log(imgs);
            this.$data.imgs = imgs; //Vue.observable(imgs);
        }
    }
});
