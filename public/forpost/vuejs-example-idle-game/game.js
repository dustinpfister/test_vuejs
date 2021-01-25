new Vue({
    el: '#app',
    template: '<div><input type="button" value="mine" v-on:click="click"></div>',
    data: {
        money: 0
    },
    methods: {
        // a button was clicked
        click: function (e) {
            console.log('foo')
        }
    }
})
