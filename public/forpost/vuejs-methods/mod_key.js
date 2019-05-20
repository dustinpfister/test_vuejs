new Vue({
    el: '#demo-methods',
    template: '<div>' +
    '<input v-on:keyup.13="submit" v-on:change="change" type="text" v-bind:value="name" >' +
    '<input type="button" v-on:click="submit" value="submit">' +
    '<ul><li> name: {{ name }}</li><li>mess: {{ mess}}</li></ul>' +
    '</div>',
    data: {
        name: 'Dustin',
        mess: ''
    },
    methods: {
        change: function (e) {
            this.$data.name = e.target.value;
        },
        submit: function (e) {
            this.$data.mess = 'Hello ' + this.$data.name;
        }
    }
});
