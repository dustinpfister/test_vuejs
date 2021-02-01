Vue.component('menu-home', {
  name: 'menu-home',
  props: ['money', 'currentMenu'],
  data: function () {
    return {
    };
  },
  template: '<div v-if="currentMenu === \'home\'"><p>This is home current number of clicks: {{ money }}</p></div>'
});