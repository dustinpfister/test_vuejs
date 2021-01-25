new Vue({
    el: '#app',
    template: '<div>' +
        '<input type="button" value="mine" v-on:click="click"> <span> {{ money }} </span> <br>' +
        '<div>' +
            '<div class="wrap_minbox" v-for="min in minerals" > {{ min.type }} </div>' +
        '</div>' +
    '</div>',
    data: {
        money: 0,
        minerals: [
            {type: 'iron', unitCount: 0, moneyPerUnit: 1},
            {type: 'copper', unitCount: 0, moneyPerUnit: 2.5},
            {type: 'silver', unitCount: 0, moneyPerUnit: 7}
        ]
    },
    methods: {
        // a button was clicked
        click: function (e) {
            var dat = this.$data;
            dat.money += 1;
        }
    }
})
