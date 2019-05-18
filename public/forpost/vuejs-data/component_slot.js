
Vue.component('stepper', {
    //template: '<div><input type="button" value="step" v-on:click="bar" ><slot>0</slot></div>',

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
            ce('slot', this.$data.i)
        ]

        return ce('div', children);

    },
    data: function () {
        return {
            i: 5
        }
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
    template: '<div><stepper></stepper><br><stepper></stepper></div>',
    data: {
        i: 5
    }
});
