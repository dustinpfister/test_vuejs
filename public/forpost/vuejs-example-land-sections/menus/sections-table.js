Vue.component('menu-sections-table', {
    props: ['currentMenu', 'sun', 'sections'],
    template: '<div v-if="currentMenu === \'sections-table\'">'+
        '<sun-ui-pos ' +
            'v-bind:currentMenu="$props.currentMenu" ' + 
            'v-bind:sun="$props.sun" ' +
            'v-bind:sections="$props.sections" ' +
            'v-on:set-sunpos-ad="sunpos"></sun-ui-pos>'+
        '<sections-info-table v-bind:sections="sections"></sections-info-table>'+
    '</div>',
    methods:{
        sunpos: function(a, b){
            this.setPos(a, b)
        }
    }
});
