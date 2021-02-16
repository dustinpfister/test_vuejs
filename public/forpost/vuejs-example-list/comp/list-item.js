Vue.component('list-item', {
    props: ['item'],
    template: '<div class="wrap_item">'+
        '<input '+
            'v-if="!$props.item.done" ' +
            'v-bind:id=\"$props.item.id+\'-mess\'\" ' +
            'v-bind:value=\"$props.item.mess\" ' +
            'type=\"text\" ' + 
            'v-on:keyup="updateItem"> ' +
        '<span v-else >{{ $props.item.mess }}</span> ' +
        '<input ' + 
            'v-bind:id=\"$props.item.id+\'-del\'\" ' + 
            'type=\"button\" ' +
            'v-on:click=\"delItem\" ' +
            'value=\"Delete\"></li> ' +
        '<input ' + 
            'v-bind:id=\"$props.item.id+\'-done\'\" ' + 
            'type=\"button\" ' +
            'v-on:click=\"doneItem\" ' +
            'value=\"Done\"></li> ' +
        '<span>{{ $props.item.done }}</span>' +
    '</div>',
    methods: {
        delItem: function(e){
            var id = this.get_item_id(e);
            this.$emit('delitem', id);
        },
        doneItem: function(e){
            var id = this.get_item_id(e);
            this.$emit('doneitem', id);
        },
        updateItem: function(e){
            var id = this.get_item_id(e);
            this.$emit('updateitem', id, 'mess', e.target.value);
        }
    }
});
