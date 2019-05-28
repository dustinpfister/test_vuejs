var vm = new Vue({
        el: '#demo-watch',
        template: '<div><p> ( {{ point.x }} , {{ point.y }} )</p>' +
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
        }
    });

// change manually point
vm.point.x = 0;
vm.point.y = 0;

// script that changes point
var points = [{
        x: 13,
        y: 5
    }, {
        x: 47,
        y: 13
    }
],
i = 0;
var next = function () {

    if (i < points.length - 1) {
        setTimeout(next, 3000);
    }
    vm.point.x = points[i].x;
    vm.point.y = points[i].y;
    i += 1;
};
setTimeout(next, 3000);
