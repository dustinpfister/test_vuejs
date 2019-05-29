// using extend
var Foo = Vue.extend({
        data: function () {
            console.log(this.$parent);
            var data = {
                mess: 'foo-' + this.$parent.id
            };
            this.$parent.id += 1;
            return data;
        }
    });

// parent of Foos
new Vue({
    el: '#demo-parent',
    template: '<div><p v-for=\"child in $children\">{{ child.$data.mess }}</p></div>',
    data: {
        mess: 'nope',
        id: 0
    },
    created: function () {

        var i = 3;
        while (i--) {
            new Foo({
                parent: this
            });
        }
    }
});
