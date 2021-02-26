Vue.component('menu-home', {
    props: ['state', 'currentMenu'],
    template: '<div v-if="currentMenu === \'home\'">'+
      '<p>This is home current number of clicks: {{ state.money }}</p>' +
    '</div>'
});