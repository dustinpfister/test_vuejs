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
        },
        // save a list to localStorage
        save: function(data){
            // first load
            var lists = this.load();
            if(lists){
                lists[0] = data;
            }else{
                // no lists! create a new object and save the current list
                console.log('no lists!');
                lists = [];
                lists.push(data);
            }
            var json = JSON.stringify(lists);
            localStorage.setItem('vuejs-list', json);
        },
        load: function(){
            var json = localStorage.getItem('vuejs-list');
            if(json){
                return JSON.parse(json);
            }
            return false;
        }
    }
});