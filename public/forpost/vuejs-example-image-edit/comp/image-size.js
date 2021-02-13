Vue.component('image-size', {
    props: ['state'],
    data: function(){
        return {
        };
    },
    template: '<div class="ui-div">'+
        '<h3>Image Size</h3>'+
        '<p>{{  }}</p>'+
    '</div>',
    methods: {
        click: function(e){
            var idArr = e.target.id.split('_');
        }
    }
});
