new Vue({
    el: '#app',
    template: '<div>' +
        '<input type="button" value="mine" v-on:click="click"> <span> {{ money }} </span> <br>' +
        '<div>' +
            '<div v-bind:id="min.id" class="wrap_minbox" v-for="min in minerals" > {{ min.type }} </div>' +
        '</div>' +
    '</div>',
    data: {
        money: 0,
        minerals: [
            {id: 'min_iron', type: 'iron', unitCount: 0, moneyPerUnit: 1},
            {id: 'min_copper', type: 'copper', unitCount: 0, moneyPerUnit: 2.5},
            {id: 'min_silver', type: 'silver', unitCount: 0, moneyPerUnit: 7}
        ]
    },
    methods: {
        // a button was clicked
        click: function (e) {
            var dat = this.$data;
            //dat.money += 1;
        }
    }
})
