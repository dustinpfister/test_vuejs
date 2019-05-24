new Vue({
    el: '#demo-lifecycle-created',
    template: '<p>n: {{ n }}</p>',
    data: {
        n: 4
    },
    // created lifecycle hook
    created: function () {
        console.log(this.$data.n); // 4
        console.log(this.$el); // undefined
    },
    // mounted lifecycle hook
    mounted: function () {
        console.log(this.$el.textContent); // n: 4
    }
});
