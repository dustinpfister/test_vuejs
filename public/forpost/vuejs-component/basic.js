// A Basic step Component
Vue.component('step', {
    template: '<div><button v-on:click="step">step</button> i: {{ i }} </div>',
    data: function () {
        return {
            i: 0
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
