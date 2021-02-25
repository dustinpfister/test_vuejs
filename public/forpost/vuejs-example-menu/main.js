var vm = new Menu({
    el: '#app',
    data: {
        menus: ['home', 'manual'],
        state: {
            money: 50
        }
    },
    created: function(){
        //var dat = this.$data;
        //dat.menus.push('manual');
    },
    methods:{
        // I can place methods that have to do with
        // how I am using the 'Menu' Class here
        deltaMoney: function(a){
            console.log('delta money event', a);
            this.$data.money += a;
        },
        // custom state change method that will be called over Menu stateChange
        stateChange: function(key, value){
            console.log(key, value);
            if(key === 'delta-money'){
                this.$data.state.money += value;
            }
        }
    }
})