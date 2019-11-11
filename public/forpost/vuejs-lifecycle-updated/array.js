var app = new Vue({
        el: '#demo',
        template: '<div>' +
        '<p>money: {{ money }}</p>' +
        '<p> ticks: {{ ticks }} works: {{ works }} </p>' +
        '<input type="button" value="work" v-on:click="work" >' +
        '</div>',
        data: {
            money: 0,
            ticks: 0,
            works: 0,
            log: []
        },
        // what to do on an update
        updated: function () {
            var data = this.$data;
            console.log('update')
            if (data.log.length === 1) {
                data.money += data.log[0].money;
                data[data.log[0].type] += 1;
            }
            if (data.log.length > 1) {
                data.money += data.log.reduce(function (acc, obj) {
                    acc = typeof acc === 'object' ? Number(acc.money) : acc;
                    return acc + Number(obj.money);
                });
                data.log.forEach(function (obj) {
                    data[obj.type] += 1;
                });
            }
            if (data.log.length >= 1) {
                data.log = [];
            }
        },
        methods: {
            tick: function () {
                var obj = {
                    type: 'ticks',
                    money: 1
                };
                this.$data.log.push(obj);
                this.$forceUpdate();
            },
            work: function () {
                var obj = {
                    type: 'works',
                    money: 25
                };
                this.$data.log.push(obj);

            }
        }
    });

setInterval(function () {

    app.tick();

}, 1000);
