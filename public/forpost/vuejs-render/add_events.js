new Vue({
    el: '#demo-render',
    data: {
        frame: 0,
        maxFrame: 10
    },
    render: function (createElement) {
        return createElement('input', {
            attrs: {
                type: 'button',
                value: 'step ' + this.$data.frame + '/' + this.$data.maxFrame
            },
            on: {
                click: this.step
            }
        });
    },
    methods: {
        step: function () {
            this.$data.frame += 1;
            this.$data.frame %= this.$data.maxFrame;
        }
    }
});
