(function(){

    Vue.component('sections-info', {
        props: ['sections'],
        template: '<div>'+
            '{{ sections.length }}'+
        '</div>'
    });

    Vue.component('menu-sections', {
        props: ['currentMenu', 'sun', 'sections'],
        template: '<div v-if="currentMenu === \'sections\'">'+
            '<sections-info v-bind:sections="sections"></sections-info>'+
        '</div>'
    });
}());