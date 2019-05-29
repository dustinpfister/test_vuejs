// parent
var vm = new Vue({
        data: {
            foo: 'bar'
        },
        methods: {
            baz: function () {}
        }
    });

// child
new Vue({
    parent: vm, // using the parent option to set a parent
    el: '#demo-parent',
    template: '<p>{{ mess }}</p>',
    data: {
        mess: 'nope'
    },
    mounted: function () {
        var mess = this.$parent.$data.foo;
        this.$data.mess = mess;
    }
});
