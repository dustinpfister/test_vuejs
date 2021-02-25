var vm = new Menu({
    el: '#app',
    methods:{
        // I can place methods that have to do with
        // how I am using the 'Menu' Class here
        deltaMoney: function(a){
            console.log('delta money event', a);
            this.$data.money += a;
        }
    }
})