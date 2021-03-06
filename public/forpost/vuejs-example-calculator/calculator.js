new Vue({
    el: '#app',
    template: '<div>' +
    '<input v-model=\"expression\" v-on:keyup=\"eval\" v-bind:style=\"style_expression\"></br>' +
    '<div v-text=\"num\" v-bind:style=\"style_num\"></div>' +
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
    '<input type=\"button\" value=\".\">' +
    '<input type=\"button\" value=\"CR\">' +
    '</form>' +
    '</div>',
    data: {
        style_expression: 'height: 20px',
        style_num: 'height: 20px',
        num: 0,
        expression: ''
    },
    methods: {
        // evaluate the expression
        eval: function () {
            try {
                this.$data.num = eval(this.$data.expression);
            } catch (e) {
                this.$data.num = e.message;
            }
        },
        // a button was clicked
        click: function (e) {
            var str = e.target.value;
            var n = parseInt(e.target.value);
            // add number to expression
            if (typeof n === 'number' && String(n) != 'NaN') {
                this.$data.expression += n;
            } else {
                // add operator to expression
                if ('+-*/.'.split('').some(function (ch) {
                        return ch === str;
                    })) {
                    this.$data.expression += str;
                }
                // clear expression
                if (str === 'CR') {
                    this.$data.expression = '';
                }
            }
            this.eval();
        }
    }
})
