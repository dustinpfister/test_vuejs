Vue.mixin({
    methods: {
        // get an id array from and event object
        get_id_array: function(evnt){
            return evnt.target.id.split('-');
        },
        // get an item id from an event object
        get_item_id: function(evnt){
            var idArray = this.get_id_array(evnt);
            return idArray.slice(0, 3).join('-');
        },
        createItem: function(opt){
            opt = opt || {};
            return {
                id: opt.id || 'list-item-' + this.$data.count,
                mess: opt.mess || this.$data.textInput,
                done: opt.done || false
            };
        }
    }
});