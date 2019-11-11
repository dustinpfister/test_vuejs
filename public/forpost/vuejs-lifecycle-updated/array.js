var app = new Vue({
        el: '#demo',
        template: '<div><p>money: {{ money }}</p></div>',
        data: {
            money: 0,
            log: []
        },
        updated: function () {
            var data = this.$data;

           console.log('update')

            if (data.log.length === 1) {
                data.money += data.log[0].money;
            }

            if (data.log.length > 1) {
                data.money += data.log.reduce(function (acc, obj) {
                    acc = typeof acc === 'object' ? Number(acc.money) : acc;
                    return acc + Number(obj.money);
                });
            }

            if (data.log.length >= 1) {
                data.log = [];
				//data.log = this.$set(data, 'log', []);
            }
        },
        methods: {
            tick: function () {
				var obj = {
                    type: 'tick',
                    money: 1
                };
                this.$data.log.push(obj);
				
				//this.$set(this.$data.log, this.$data.log.length, obj);
				console.log('tick');
				this.$forceUpdate();
				
            }
        }
    });

setInterval(function () {

    app.tick();

}, 1000);
