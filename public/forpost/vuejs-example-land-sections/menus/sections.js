(function(){

    Vue.component('sections-info', {
        props: ['sections'],
        template: '<div>'+
            '<ul>' +
               '<li v-for="sec, i in sections" >section: {{i}}, dist: {{ sec.distance.toFixed(2) }}, per: {{ sec.per.toFixed(2) }}</li>'+
            '</ul>'+
        '</div>'
    });

    Vue.component('menu-sections', {
        props: ['currentMenu', 'sun', 'sections'],
        template: '<div v-if="currentMenu === \'sections\'">'+
            '<sections-info v-bind:sections="sections"></sections-info>'+
        '</div>'
    });
}());