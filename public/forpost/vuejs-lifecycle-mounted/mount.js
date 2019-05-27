var vm = new Vue({
        template: '<p>n: {{ n }}</p>',
        data: {
            n: 4
        },
        // mounted lifecycle hook
        mounted: function () {
            console.log(this.$el.textContent); // n: 4
        }
    });
setTimeout(function () {
    vm.$mount('#demo-lifecycle-mounted');
}, 3000);
