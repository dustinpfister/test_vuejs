Vue.component('image-manager', {
    props: ['state'],
    data: function(){
        return {
        };
    },
    template: '<div class="ui-div">'+
        '<h3>Image Manager</h3>'+
        '<p>Image {{ state.currentImage }} of {{ state.imgs.length }}</p>'+
        '<button id="button_prev" v-on:click="click">Prev</button> | <button id="button_next" v-on:click="click">Next</button>'+
    '</div>',
    methods: {
        click: function(e){
            var idArr = e.target.id.split('_');
            console.log(idArr);
        }
    }
});
