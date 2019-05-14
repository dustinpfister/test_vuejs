
var vm = new Vue({
        el: '#interface',
        template: '<div>' +
        '<input v-on:click="step" type="button" value="step">' +
        '<input v-on:click="reset" type="button" value="reset">' +
        '<p>frame: {{ frame }} / {{ maxFrame }}</p>' +
        '</div>',
        data: {
            frame: 0,
            maxFrame: 10
        },
        methods: {
            step: function (e) {
                this.frame += 1;
                this.frame %= this.maxFrame;
            },
            reset: function () {
                this.frame = 0;
            }
        }
    });
