
Vue.component('stepper', {
    template: '<div><input type="button" value="step" v-on:click="bar" ><span> i: {{ i }}</span><slot></slot></div>',
    data: function () {
        return {
            i: 0
        }
    },
    methods: {
        bar: function () {
            this.$data.i += 1;
        }
    }
})

new Vue({
    el: '#demo-data',
    template: '<div><stepper></stepper><br><stepper></stepper></div>',
});
