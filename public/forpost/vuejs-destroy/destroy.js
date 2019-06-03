var vm = new Vue({
        el: '#demo-destroy',
        template: '<div>' +
        '<input type="button" v-on:click="step" value="step">' +
        '<p>i:{{i}}</p>' +
        '</div>',
        data: {
            i: 0
        },
        methods: {
            step: function () {
                this.$data.i += 1;
            }
        }
    });

setTimeout(function () {
    vm.$destroy();
}, 5000);
