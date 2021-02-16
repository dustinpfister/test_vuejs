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

new Vue({
    el: '#app',
    template: '<div>' +
    '<input type=\"text\" v-model=\"textInput\"> '+
    '<input type=\"Button\" value=\"Push\" v-on:click=\"pushNew\"></br>' +
    '<div>' +
        '<list-item ' +
            'v-for="item in items" ' +
            'v-bind:key="item.id" ' +
            'v-bind:item="item" ' + 
            'v-on:delitem="delItem"></list-item>'+
    '</div>' +
    '</div>',
    data: {
        textInput: 'Enter new item text',
        items: []
    },
    methods: {
        // delete an item
        delItem: function(e){
            var id = e.target.id.replace(/-del/, ''),
            i = this.$data.items.length,
            item;
            while(i--){
                item = this.$data.items[i];
                if(item.id === id){
                    this.$data.items.splice(i, 1);
                }
            }
        },
        // push a new item
        pushNew: function () {
            var id = this.$data.items.length;
            this.$data.items.push({
                id: 'list-item-' + id,
                mess: this.$data.textInput,
                done: false
            });
        }
    }
});