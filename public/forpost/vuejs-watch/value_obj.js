new Vue({
    el: '#demo-watch',
    template: '<div><p> ( {{ point.x }} , {{ point.y }} )</p>' +
    '<input type=\"button\" value=\"rand2\" v-on:click=\"rand2\">' +
    '<ul><li v-for=\"m in mess\" >{{ m }}</li></ul></div>',
    data: {
        point: {
            x: 40,
            y: 2
        },
        mess: []
    },
    watch: {
        point: {
            handler: function (newVal, oldVal) {
                this.$data.mess.push('Point change to ( ' + newVal.x + ' , ' + newVal.y + ' )');
            },
            deep: true
        }
    },
    methods: {
        rand1: function () {
            this.$data.point.x = 25 + Math.floor(Math.random() * 75);
            this.$data.point.y = 75;
        },
        rand2: function () {
            this.$data.point.x = 5 + Math.floor(Math.random() * 95);
            this.$data.point.y = 5 + Math.floor(Math.random() * 95);
        }
    },
    mounted: function () {
        var vm = this;
        // change manually point
        vm.point.x = 0;
        vm.point.y = 0;
        // script that changes point
        var count = 5,
        delay = 500;
        var next = function () {
            if (count) {
                setTimeout(next, delay);
            }
            vm.rand1();
            count -= 1;
        };
        setTimeout(next, delay);
    }
});
