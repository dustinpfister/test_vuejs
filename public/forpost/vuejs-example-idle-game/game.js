new Vue({
    el: '#app',
    template: '<div><input type="button" value="mine" v-on:click="click"> {{ money }} </div>',
    data: {
        money: 0
    },
    methods: {
        // a button was clicked
        click: function (e) {
            var dat = this.$data;
            dat.money += 1;
        }
    }
})
