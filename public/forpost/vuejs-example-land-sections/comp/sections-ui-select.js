// ui for selecting the current section index to work on
Vue.component('sections-ui-select', {
    props: ['section'],
    template: '<div class="menu_item">'+
        '<h3>Select current world section</h3>'+
        '<div><p>#{{ section.i }}, distance: {{ section.distance.toFixed(2) }}</p></div>' +
        '<div><button v-on:click="prev">prev</button> | '+
        '<button v-on:click="next">next</button></div>'+
    '</div>',
    methods: {
        next: function(){
            this.$emit('step-section', 1);
        },
        prev: function(){
            this.$emit('step-section', -1);
        }
    }
});
