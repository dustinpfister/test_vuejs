new Vue({
    el: '#app',
    template: '<div>' +
    '<input v-model=\"rpm\" v-on:keyup=\"eval\"></br>' +
    '<input v-model=\"page_views\" v-on:keyup=\"eval\"></br>' +
    '<input v-model=\"money\" v-on:keyup=\"evalMoney\"></br>' +
    '</form>' +
    '</div>',
    data: {
        rpm: 1.45,
        page_views: 1000,
        money: 1.45
    },
    methods: {
        eval: function () {
            var d = this.$data;
            d.money = d.page_views / 1000 * d.rpm;
        },
        evalMoney: function () {
            var d = this.$data;
            d.page_views = d.money / d.rpm * 1000;
        }
    }
})
