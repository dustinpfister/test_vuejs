new Vue({
    el: '#app',
    template: '<div class="wrap_main">' +
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
    //'<div>{{ items }}</div>'+
    '</div>',
    data: {
        listName: 'demo', // list name used for save states
        textInput: 'Enter new item text',
        count: 0, // count used to make sure I do not have duplicate item ids
        items: []
    },
    mounted: function(){
        // load and saved list
        var vm = this,
        lists = vm.load(),
        savedList = lists[0],
        dat = vm.$data;
        dat.count = savedList.count;
        savedList.items.forEach(function(savedItem){
            dat.items.push(vm.createItem(savedItem));
        });
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
            this.save(this.$data);
        },
        // update an item by id
        updateItemById: function(id, prop, value){
            var item = this.getItemById(id, false);
            item[prop] = value;
            this.save(this.$data);
        },
        // push a new item
        pushNew: function () {
            this.$data.items.push(this.createItem());
            this.$data.count += 1;
            this.save(this.$data);
        }
    }
});