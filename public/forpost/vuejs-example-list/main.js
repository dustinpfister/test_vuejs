new Vue({
    el: '#app',
    template: '<div>' +
    '<div class="wrap_create">' +
        '<input type=\"text\" v-model=\"textInput\"> '+
        '<input type=\"Button\" value=\"Push\" v-on:click=\"pushNew\"></br>' +
    '</div>'+
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
        count: 0,  // count used to make sure I do not have duplicate item ids
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
        // update an item by id
        updateItemById: function(id, prop, value){
            var item = this.getItemById(id, false);
            console.log(id, prop, value);
            item[prop] = value;
        },
        // push a new item
        pushNew: function () {
            this.$data.items.push({
                id: 'list-item-' + this.$data.count,
                mess: this.$data.textInput,
                done: false
            });
            this.$data.count += 1;
        }
    }
});