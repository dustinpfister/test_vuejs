var app = new Vue({
        el: '#demo',
        template: '<div>' +
        '<p>money: {{ money }}</p>' +
        '<p> ticks: {{ ticks }} works: {{ works }} </p>' +
        '<input type="button" value="work" v-on:click="work" >' +
        '</div>',
        data: {
            money: 0, // game money
            ticks: 0, // update tick count
            works: 0, // a count of works
            log: []   // a log of work objects
        },
        // what to do on an update
        updated: function () {
            var data = this.$data;
            this.processWorkLog();
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
            },
            processWorkLog: function(){
                var data = this.$data;
                // if there are one or more objects in log
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
                // clear out the log
                if (data.log.length >= 1) {
                    data.log = [];
                }
            }
        }
    });

setInterval(function () {
    app.tick();
}, 1000);
