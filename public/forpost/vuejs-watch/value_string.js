var vm = new Vue({
        el: '#demo-watch',
        template: '<div><p> ( {{ x }} , {{ y }} )</p>' +
        '<ul><li v-for=\"m in mess\" >{{ m }}</li></ul></div>',
        data: {
            x: 40,
            y: 2,
            mess: []
        },
        watch: {
            x: 'xChanged',
            y: 'yChanged'
        },
        methods: {
            xChanged: function (newVal, oldVal) {
                this.$data.mess.push('x has been changed from ' + oldVal + ' to ' + newVal);
            },
            yChanged: function (newVal, oldVal) {
                this.$data.mess.push('y has been changed from ' + oldVal + ' to ' + newVal);
            },
            movePoint: function (dx, dy) {
                this.$data.x += dx;
                this.$data.y += dy;
            }
        }
    });

vm.movePoint(-40, -2);
vm.movePoint(0, 20);
