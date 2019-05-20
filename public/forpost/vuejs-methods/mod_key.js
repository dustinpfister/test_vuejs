new Vue({
    el: '#demo-methods',
    template: '<div>' +
    '<input v-on:keyup.13="submit" type="text" v-bind:value="mess" >' +
    '<input type="button" v-on:click="submit" value="submit">' +
    '</div>',
    data: {
        mess: 'foo'
    },
    methods: {
        submit: function (e) {
            console.log(this.$data.mess)
        }
    }
});
