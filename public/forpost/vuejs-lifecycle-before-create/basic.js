new Vue({
    el: '#demo-lifecycle-before-create',
    template: '<p>n: {{ n }}</p>',
    data: {
        n: 42
    },
    beforeCreate: function () {
        // the data object is not yet created
        console.log(this.$data); // undefined
    },
    created: function () {
        // the data object is not created
        console.log(this.$data.n); // 42
    }
});
