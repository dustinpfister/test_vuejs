// A Basic step Component
Vue.component('step', {
    props: ['si'],
    template: '<div><button v-on:click="step">step</button> i: {{ i }} </div>',
    data: function (a) {
        return {
            i: parseInt(this.si === undefined ? 0 : this.si)
        }
    },
    methods: {
        step: function (e) {
            this.$data.i += 1;
        }
    }
});

new Vue({
    el: '#step-demo'
})
