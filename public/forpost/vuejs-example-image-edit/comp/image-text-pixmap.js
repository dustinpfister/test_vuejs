Vue.component('image-text-pixmap', {
    props: ['imgs'],
    data: function(){
        return {
            json: ''
        };
    },
    template: '<div class="ui-div">'+
        '<h3>Pixmap JSON</h3>'+
        '<button v-on:click="update">update</button>'+
        '<textarea cols="70" rows="15">{{ json }}</textarea>'+
    '</div>',
    mounted: function(){
        this.updateText();
    },
    methods: {
        update: function(){
            console.log('update text');
            this.updateText();
            this.$forceUpdate();
        },
        updateText : function(){
            console.log(this.$props.imgs);
            var pixmap = IMG.createPixmap({
                imgs: this.$props.imgs
            });
            this.$data.json = JSON.stringify(pixmap);
        }
    }
});
