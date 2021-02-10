Vue.component('image-text-pixmap', {
    props: ['imgs'],
    data: function(){
        return {
            json: ''
        };
    },
    template: '<div class="ui-div">'+
        '<h3>Pixmap JSON</h3>'+
        //'<button v-on:click="update">update</button> | '+
        '<button v-on:click="load">load</button><br>'+
        '<textarea cols="70" rows="15" v-text="json" v-on:keyup="keyup"></textarea>'+
    '</div>',
    mounted: function(){
        this.updateText();
    },
    updated: function(){
        //this.updateText();
    },
    methods: {
        update: function(){
            this.updateText();
            this.$forceUpdate();
        },
        keyup: function(e){
            this.$data.json = e.target.value;
        },
        load: function(){
            this.$emit('load-json', this.$data.json);
        },
        updateText : function(){
            var pixmap = IMG.createPixmap({
                w: 8,
                h: 8,
                palette: this.$props.imgs[0].palette,
                imgs: this.$props.imgs
            });
            this.$data.json = JSON.stringify(pixmap);
            //!!! I should not have to do this, but it seems like I have to
            this.$el.querySelectorAll('textarea')[0].value = this.$data.json;
        }
    }
});
