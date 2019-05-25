new Vue({
    el: '#demo-lifecycle-mounted',
    template: '<p>n: {{ n }}</p>',
    data: {
        n: 4
    },
    // mounted lifecycle hook
    mounted: function () {
        console.log(this.$el.textContent); // n: 4
    }
});
