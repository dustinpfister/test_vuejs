
Vue.component('stepper', {

    // uisng props
    props: ['si'],

    // setting i to si prop if given
    data: function () {
        return {
            i: this.si === undefined ? 0 : parseInt(this.si)
        }
    },

    // using a render method
    render: function (ce) {
        var children = [
            ce('input', {
                domProps: {
                    type: 'button',
                    value: 'step'
                },
                on: {
                    click: this.bar
                }
            }),
            ce('slot', ' ' + this.$data.i)
        ]
        return ce('div', children);
    },

    methods: {
        bar: function () {
            this.$data.i += 1;
            console.log(this.$data.i);
        }
    }
})

new Vue({
    el: '#demo-data',
    template: '<div><stepper si=\"5\"></stepper><br><stepper></stepper></div>'
});
