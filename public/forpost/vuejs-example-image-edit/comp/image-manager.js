Vue.component('image-manager', {
    props: ['state'],
    data: function(){
        return {
        };
    },
    template: '<div class="ui-div">'+
        '<h3>Image Manager</h3>'+
        '<p>Image {{ state.currentImage }} of {{ state.imgs.length }}</p>'+
    '</div>',
    methods: {}
});
