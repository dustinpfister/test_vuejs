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
            'v-on:delitem="delItemById" ' +
            'v-on:updateitem="updateItemById" ></list-item>'+
    '</div>' +
    '<div>{{ items }}</div>'+
    '</div>',
    data: {
        textInput: 'Enter new item text',
        items: []
    },
    methods: {
        // get item (or item index) by id
        getItemById: function(id, returnIndex){
            returnIndex = returnIndex === undefined ? false: returnIndex;
            var i = this.$data.items.length,
            item;
            while(i--){
                item = this.$data.items[i];
                if(item.id === id){
                    if(returnIndex){
                        return i;
                    }
                    return item;
                }
            }
            return false;
        },
        // delete an item by id
        delItemById: function(id){
            var i = this.getItemById(id, true);
            if(typeof i === 'number'){
                this.$data.items.splice(i, 1);
            }
        },
        updateItemById: function(id, prop, value){
            var item = this.getItemById(id, false);
            console.log(id, prop, value);
            item[prop] = value;
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