Vue.component('stepper', {

    // using props
    props: ['si'],

    // setting i to si prop if given
    data: function () {
        return {
            i: this.si === undefined ? 0 : parseInt(this.si)
        }
    },

    template: '<div><input type="button" value="step" v-on:click="stepit" ><span> {{i}} </span></div>',
    methods: {
        stepit: function () {
            this.$data.i += 1;
        }
    }
})

// can use a si attribute to set starting index
new Vue({
    el: '#demo-data',
    template: '<div>' +
    '<stepper si=\"5\"></stepper><br>' +
    '<stepper></stepper>' +
    '</div>'
});
