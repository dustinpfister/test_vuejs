new Vue({
    el: '#app',
    template: '<div>' +
    '<div v-text=\"expression\" v-bind:style=\"style_expression\"></div>' +
    '<div v-text=\"num\"></div>' +
    '<form v-on:click=\"click\">' +
    '<input type=\"button\" value=\"1\">' +
    '</form>' +
    '</div>',
    data: {
        style_expression: 'height: 20px',
        num: 0,
        expression: ''
    },
    methods: {

        click: function (a) {

            console.log(a.target.value)

        }

    }
})
