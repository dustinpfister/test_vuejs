// just display some basic info
Vue.component('disp', {
    props: ['state'],
    template: '<div class="ui">' +
        '<h3>Web Assets Game: </h3>' +
        '<p>Money: {{ format_money(state.money) }}</p>'+
    '</div>'
});
