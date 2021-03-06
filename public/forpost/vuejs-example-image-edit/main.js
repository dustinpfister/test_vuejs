var vm = new Vue({
    el: '#app',
    template: '<div class="wrap_main">'+
        '<div class="warp_group">'+
            '<image-color-pick v-bind:img="imgs[currentImage]" v-on:color-click="colorClickHandler"></image-color-pick>'+
            '<image-div-grid v-bind:img="imgs[currentImage]" v-on:px-click="pxClickHandler"></image-div-grid>'+
            '<image-manager v-bind:state="$data" v-on:manager="managerClickHandler" ></image-manager>'+
            '<image-size v-bind:state="$data" ></image-size>'+
        '</div>' +
        '<div style="text-align:center;">'+
            '<image-text-pixmap v-bind:imgs="imgs" v-on:load-json="load"></image-text-pixmap>'+
        '</div>' +
    '</div>',
    data: function(){
        var data = {
           currentImage: 0,
           imageWidth: 16,
           imageHeight: 16,
           imgs : []
        };
        data.imgs.push(IMG({
            width:data.imageWidth,
            height:data.imageHeight,
            palette:[false,"white","black","red","orange","blue"]
        }))
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
            console.log(imgs);
            
            this.$data.imgs = imgs; //Vue.observable(imgs);
        }
    }
});
