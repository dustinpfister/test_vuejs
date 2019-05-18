new Vue({
    el: '#demo-methods',
    template: '<input v-on:click="clicker" type="button" v-bind:value="\'click count: \'+i" >',
    data: {
        i: 0
    },
    methods: {
        clicker: function () {
            this.i += 1;
        }
    }
});
