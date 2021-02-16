Vue.component('list-item', {
    props: ['item'],
    template: '<div>'+
        '<input v-bind:value=\"$props.item.mess\"> '+
        '<input v-bind:id=\"$props.item.id+\'-del\'\" type=\"button\" v-on:click=\"delItem\" value=\"Del\"></li>'+
    '</div>',
    methods: {
        delItem: function(e){
            this.$emit('delitem', e);
        }
    }
});
