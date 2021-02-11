Vue.component('image-manager', {
    props: ['state'],
    data: function(){
        return {
        };
    },
    template: '<div class="ui-div">'+
        '<h3>Image Manager</h3>'+
        '<p>Image {{ (state.currentImage + 1) }} of {{ state.imgs.length }}</p>'+
        '<button id="button_prev" v-on:click="click">Prev</button> | <button id="button_next" v-on:click="click">Next</button>'+
    '</div>',
    methods: {
        click: function(e){
            var idArr = e.target.id.split('_');
            if(idArr[1] === 'next'){
                console.log('next event');
                this.$emit('manager', 'next');
            }
            if(idArr[1] === 'prev'){
                console.log('prev event');
                this.$emit('manager', 'prev');
            }
        }
    }
});
