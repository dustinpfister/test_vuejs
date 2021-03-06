Vue.component('image-text-pixmap', {
    props: ['imgs'],
    data: function(){
        return {
            json: '',
            vaild: false,
            mess: ''
        };
    },
    template: '<div class="ui-div">'+
        '<h3>Pixmap JSON</h3>'+
        '<p v-bind:style="messStyle()">vaild: {{ vaild }}, mess: {{ mess }}</p>' +
        '<button v-on:click="load">load</button><br>'+
        '<textarea cols="70" rows="15" v-text="json" v-on:keyup="keyup"></textarea>'+
    '</div>',
    mounted: function(){
        if(this.$props.imgs.length >= 1){
            this.updateText();
        }
    },
    methods: {
        messStyle: function(){
            if(this.$data.valid){
                return 'color:lime;'
            }
            return 'color:red;'
        },
        // vaidate the JSON
        validate: function(){
            var dat = this.$data;
            dat.valid = false;
            try{
                // the json should parse okay
                var obj = JSON.parse(this.$data.json);
                dat.valid = true;
                dat.mess = 'JSON looks good';
                // look for fractions of a frame
                var i = 0,
                aniKeys = Object.keys(obj.ani),
                len = aniKeys.length;
                while(i < len){
                    var key = aniKeys[i];
                    var ani = obj.ani[key]
                    var size = ani.w * ani.h;
                    var frames = ani.data.length / size
                    if(frames % 1 != 0){
                        dat.valid = false;
                        dat.mess = 'Fraction of a frame frameCount=' + frames;
                        break;
                    }
                    i += 1;
                }
            }catch(e){
                dat.mess = 'Error parsing JSON';
            }
        },
        // what to do on a keyup event
        keyup: function(e){
            this.$data.json = e.target.value;
            this.validate();
        },
        // emit a 'load-json' event
        load: function(){
            var dat = this.$data;
            this.validate();
            if(dat.valid){
                this.$emit('load-json', dat.json);
            }
        },
        // update textarea
        updateText : function(){
            var img = this.$props.imgs[0];
            var pixmap = IMG.createPixmap({
                w: img.width,
                h: img.height,
                palette: img.palette,
                imgs: this.$props.imgs
            });
            this.$data.json = JSON.stringify(pixmap);
            //!!! I should not have to do this, but it seems like I have to
            this.$el.querySelectorAll('textarea')[0].value = this.$data.json;
            this.validate();
        }
    }
});
