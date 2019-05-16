// Define a new component called button-counter
Vue.component('button-counter', {
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
    data: function () {
        return {
            count: 0
        }
    }
});

new Vue({ el: '#components-demo' })