Vue.component('list-item', {
    props: ['item'],
    template: '<div>'+
        '<input v-bind:id=\"$props.item.id+\'-mess\'\" v-bind:value=\"$props.item.mess\" type=\"text\" v-on:keyup="updateItem"> '+
        '<input v-bind:id=\"$props.item.id+\'-del\'\" type=\"button\" v-on:click=\"delItem\" value=\"Del\"></li>'+
    '</div>',
    methods: {
        delItem: function(e){
            var id = this.get_item_id(e);
            this.$emit('delitem', id);
        },
        updateItem: function(e){
            var id = this.get_item_id(e);
            this.$emit('updateitem', id, 'mess', e.target.value);
        }
    }
});
