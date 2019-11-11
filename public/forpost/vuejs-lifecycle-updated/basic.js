var app = new Vue({
        el: '#demo',
        template: '<div><p>n: {{ n }}</p><p>{{ log }}</p></div>',
        data: {
            n: 4,
            log: []
        },
        updated: function () {
            var data = this.$data;
            if (data.log.length === 1) {
                data.n += data.log[0].money;
            }
            if (data.log.length > 1) {
                data.n += data.log.reduce(function (acc, obj) {
                    acc = typeof acc === 'object' ? Number(acc.money) : acc;
                    return acc + Number(obj.money);
                });
            }
            if (data.log.length >= 1) {
                data.log = [];
            }
        },
        methods: {
            tick: function () {
                this.$data.log.push({
                    type: 'tick',
                    money: 1
                });
            }
        }
    });

setInterval(function () {

    app.tick();

}, 1000);
