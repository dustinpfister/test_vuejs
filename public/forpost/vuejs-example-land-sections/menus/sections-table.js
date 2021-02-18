Vue.component('menu-sections-table', {
    props: ['currentMenu', 'sun', 'sections'],
    template: '<div v-if="currentMenu === \'sections-table\'">'+
        '<sections-info-table v-bind:sections="sections"></sections-info-table>'+
    '</div>'
});
