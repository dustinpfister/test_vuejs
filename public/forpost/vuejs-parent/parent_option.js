// parent
var vm = new Vue({
        data: {
            str: 'foo'
        },
        methods: {
            baz: function () {
                // when the parent option is used
                // this vue instance will have a child
                var child = this.$children[0];
                console.log(this.$data.str); // 'foo'
                console.log(child.str); // 'bar'
                console.log(child.mess); // 'foobar'
            }
        }
    });

// child
new Vue({
    parent: vm, // using the parent option to set a parent
    el: '#demo-parent',
    template: '<p>{{ mess }}</p>',
    data: {
        str: 'bar',
        mess: 'nope'
    },
    mounted: function () {
        var mess = this.$parent.$data.str + this.$data.str;
        this.$data.mess = mess;
        this.$parent.baz();
    }
});
