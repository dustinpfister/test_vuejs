new Vue({
    el: '#demo-data',
    template: '<div><input type="button" value="step" v-on:click="bar" ><span> i: {{ i }}</span></div>',
    data: {
        i: 0
    },
    methods: {
        bar: function () {
            // the data object can be accessed via
            // the this.$data property
            this.$data.i += 1;
        }
    }
});
