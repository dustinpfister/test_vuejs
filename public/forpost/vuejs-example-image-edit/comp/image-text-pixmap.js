Vue.component('image-text-pixmap', {
    props: ['imgs'],
    data: function(){
        return {
            json: ''
        };
    },
    template: '<div class="ui-div">'+
        '<h3>Pixmap JSON</h3>'+
        '<textarea cols="70" rows="15">{{ json }}</textarea>'+
    '</div>',
    mounted: function(){
        this.updateText();
    },
    methods: {
        updateText : function(){
            var pixmap = IMG.createPixmap({
                imgs: [IMG(), IMG()]
            });
            this.$data.json = JSON.stringify(pixmap);
        }
    }
});
