// parent
var vm = new Vue({
        data: {
            str: 'foo'
        },
        methods: {
            baz: function () {
                console.log(this.$children[0].mess);
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
