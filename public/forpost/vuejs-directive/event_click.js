
var vm = new Vue({
        el: '#interface',
        data: {
            frame: 0,
            maxFrame: 10
        },
        methods: {
            step: function (e) {
                this.frame += 1;
                this.frame %= this.maxFrame;
            }
        }
    });
