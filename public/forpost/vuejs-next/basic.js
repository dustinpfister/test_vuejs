var vm = new Vue({
        el: '#demo-nexttick',
        template: '<p>{{ figX() }}</p>',
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

vm.radian = 0;
console.log(vm.$el.textContent); // 17.68

Vue.nextTick(function () {
    console.log(vm.$el.textContent); // 25
});
