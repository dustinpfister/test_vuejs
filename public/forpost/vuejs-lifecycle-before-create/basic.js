new Vue({
    el: '#demo-lifecycle-before-create',
    template: '<p>n: {{ n }}</p>',
    data: {
        n: 4
    },
    beforeCreate: function () {
        console.log(this.$data);
    },
    created: function () {
        console.log(this.$data);
    }
});
