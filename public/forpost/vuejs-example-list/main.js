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
            'v-on:delitem="delItem" ' +
            'v-on:updateitem="updateItem" ></list-item>'+
    '</div>' +
    '<div>{{ items }}</div>'+
    '</div>',
    data: {
        textInput: 'Enter new item text',
        items: []
    },
    methods: {
        // delete an item
        delItem: function(e){
            console.log( this.get_item_id(e) )
/*
            var id = e.target.id.replace(/-del/, ''),
            i = this.$data.items.length,
            item;
            while(i--){
                item = this.$data.items[i];
                if(item.id === id){
                    this.$data.items.splice(i, 1);
                }
            }
*/
        },
        updateItem: function(e){
            console.log(e.target.value);
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