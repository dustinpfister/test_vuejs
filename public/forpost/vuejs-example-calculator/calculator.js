new Vue({
    el: '#app',
    template: '<div>' +
    '<div v-text=\"expression\" v-bind:style=\"style_expression\"></div>' +
    '<div v-text=\"num\"></div>' +
    '<form v-on:click=\"click\">' +
    '<input type=\"button\" value=\"1\">' +
    '<input type=\"button\" value=\"2\">' +
    '<input type=\"button\" value=\"3\">' +
    '<input type=\"button\" value=\"4\"><br>' +
    '<input type=\"button\" value=\"5\">' +
    '<input type=\"button\" value=\"6\">' +
    '<input type=\"button\" value=\"7\">' +
    '<input type=\"button\" value=\"8\"><br>' +
    '<input type=\"button\" value=\"9\">' +
    '<input type=\"button\" value=\"0\">' +
    '<input type=\"button\" value=\"+\">' +
    '<input type=\"button\" value=\"-\"><br>' +
    '<input type=\"button\" value=\"*\">' +
    '<input type=\"button\" value=\"/\">' +
    '<input type=\"button\" value=\"CR\">'+
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

            var n = parseInt(a.target.value);

            if (typeof n === 'number' && String(n) != 'NaN') {
                this.$data.expression += n;
            }

        }

    }
})
