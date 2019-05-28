new Vue({
    el: '#demo-watch',
    template: '<div><p> point: ( {{ point.x }} , {{ point.y }} )</p>' +
    '<p>ticks: {{ ticks }}</p>' +
    '<input type=\"button\" value=\"rand2\" v-on:click=\"rand2\">' +
    '<ul><li v-for=\"m in mess\" >{{ m }}</li></ul></div>',
    data: {
        point: {
            x: 40,
            y: 2
        },
        mess: [],
        ticks: 10
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
            this.$data.point.x = 10 + Math.floor(Math.random() * 90);
            this.$data.point.y = 95 + Math.floor(Math.random() * 5);
        },
        tickDown: function () {
            if (this.$data.ticks >= 1) {
                this.rand1();
                setTimeout(this.tickDown, 1000);
                this.$data.ticks -= 1;
            }
        }
    },
    mounted: function () {
        // change manually point
        this.$data.point.x = 0;
        this.$data.point.y = 0;
        // start tick down
        this.tickDown();
    }
});
