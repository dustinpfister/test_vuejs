new Vue({
    el: '#app',
    template: '<div>' +
        '<input id="button_mine" type="button" value="mine" v-on:click="click"> <span> {{ money }} </span> <br>' +
        '<div>' +
            '<div v-bind:id="min.id" class="wrap_minbox" v-for="min in minerals" >' +
                 '<input v-bind:id="\'button_sellall_\' +min.type" type="button" value="sell all" v-on:click="click">' +
                 ' {{ min.type }} ' +
            '</div>' +
        '</div>' +
    '</div>',
    data: {
        money: 0,
        minerals: [
            {id: 'minbox_iron', type: 'iron', unitCount: 0, moneyPerUnit: 1},
            {id: 'minbox_copper', type: 'copper', unitCount: 0, moneyPerUnit: 2.5},
            {id: 'minbox_silver', type: 'silver', unitCount: 0, moneyPerUnit: 7}
        ]
    },
    methods: {
        // a button was clicked
        click: function (e) {
            var dat = this.$data;
            var buttonArr = e.target.id.split('_');
            if(buttonArr[1] == 'mine'){
                console.log('mine');
            }
            if(buttonArr[1] == 'sellall'){
                var type = buttonArr[2];
                console.log('sell all ' + type);
            }
        }
    }
})
