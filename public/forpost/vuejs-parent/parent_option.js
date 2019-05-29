var vm = new Vue({

        data: {
            foo: 'bar'
        }

    });

new Vue({

    parent: vm,
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
