var vm = new Vue({
        el: '#demo-nexttick',
        template: '<div>{{ figX() }}</div>',
        data: {
            radian: Math.PI / 4,
            radius: 25,
            offX: 0
        },
        methods: {
            figX: function () {
                return Number(Math.cos(this.radian) * this.radius + this.offX).toFixed(2);
            }
        }
    });

Vue.nextTick(function () {});
